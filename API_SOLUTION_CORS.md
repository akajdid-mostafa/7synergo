# Solution CORS pour l'API Next.js

## Problème
L'API Next.js retourne une erreur 404 pour les requêtes OPTIONS (preflight CORS) et ne renvoie pas les en-têtes CORS nécessaires.

## Solution

Modifiez votre fichier API Next.js (probablement dans `app/api/7synergo/route.js` ou `pages/api/7synergo.js`) pour ajouter la gestion CORS.

### Pour Next.js 13+ (App Router) - `app/api/7synergo/route.js`

```javascript
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const formatValue = (value) => {
  if (value === null || value === undefined || value === "") {
    return "Non renseigné";
  }
  if (typeof value === "boolean") {
    return value ? "Oui" : "Non";
  }
  return value;
};

// Fonction pour les en-têtes CORS
const corsHeaders = {
  "Access-Control-Allow-Origin": "http://localhost:5173", // Votre URL frontend
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400",
};

// Gérer les requêtes OPTIONS (preflight)
export async function OPTIONS(req) {
  return NextResponse.json({}, { 
    status: 200,
    headers: corsHeaders
  });
}

export async function POST(req) {
  try {
    const formData = await req.json();

    // Get current date and time
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const date = `${day}/${month}/${year}`;
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const time = `${hours}:${minutes}`;
    const dateTime = `${time} ${date}`;

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ... (votre code HTML email reste identique) ...

    const emailContent = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nouvelle Fiche d'Inscription - 7Synergo</title>
    <style>
        /* ... votre CSS existant ... */
    </style>
</head>
<body>
    <!-- ... votre HTML existant ... -->
</body>
</html>
    `;

    await transporter.sendMail({
      from: `7Synergo Inscription Form <${process.env.EMAIL_USER}>`,
      to: ["mostafaakajdid6@gmail.com"],
      subject: `Nouvelle Fiche d'Inscription 7Synergo - ${formData.nomPrenom || 'Nouveau client'}`,
      html: emailContent,
    });

    return NextResponse.json(
      { message: "Inscription form sent successfully" },
      { 
        status: 200,
        headers: corsHeaders
      }
    );
  } catch (error) {
    console.error("Error sending inscription email:", error);
    console.error("Error details:", {
      message: error.message,
      stack: error.stack,
      code: error.code
    });
    
    return NextResponse.json(
      { 
        message: "Error sending inscription email",
        error: error.message
      },
      { 
        status: 500,
        headers: corsHeaders
      }
    );
  }
}
```

### Pour Next.js 12 (Pages Router) - `pages/api/7synergo.js`

```javascript
import nodemailer from "nodemailer";

const formatValue = (value) => {
  if (value === null || value === undefined || value === "") {
    return "Non renseigné";
  }
  if (typeof value === "boolean") {
    return value ? "Oui" : "Non";
  }
  return value;
};

// Fonction pour les en-têtes CORS
const corsHeaders = {
  "Access-Control-Allow-Origin": "http://localhost:5173",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400",
};

export default async function handler(req, res) {
  // Gérer les requêtes OPTIONS (preflight)
  if (req.method === "OPTIONS") {
    return res.status(200).json({});
  }

  // Ajouter les en-têtes CORS à toutes les réponses
  Object.entries(corsHeaders).forEach(([key, value]) => {
    res.setHeader(key, value);
  });

  if (req.method === "POST") {
    try {
      const formData = req.body;

      // ... votre code existant pour l'email ...

      await transporter.sendMail({
        from: `7Synergo Inscription Form <${process.env.EMAIL_USER}>`,
        to: ["mostafaakajdid6@gmail.com"],
        subject: `Nouvelle Fiche d'Inscription 7Synergo - ${formData.nomPrenom || 'Nouveau client'}`,
        html: emailContent,
      });

      return res.status(200).json({ message: "Inscription form sent successfully" });
    } catch (error) {
      console.error("Error sending inscription email:", error);
      return res.status(500).json({ 
        message: "Error sending inscription email",
        error: error.message
      });
    }
  } else {
    res.setHeader("Allow", ["POST", "OPTIONS"]);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
```

## Alternative : Middleware CORS global

Créez un fichier `middleware.js` à la racine de votre projet Next.js :

```javascript
import { NextResponse } from 'next/server';

export function middleware(request) {
  // Gérer les requêtes OPTIONS
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:5173',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Max-Age': '86400',
      },
    });
  }

  const response = NextResponse.next();

  // Ajouter les en-têtes CORS à toutes les réponses
  response.headers.set('Access-Control-Allow-Origin', 'http://localhost:5173');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  return response;
}

export const config = {
  matcher: '/api/:path*',
};
```

## Notes importantes

1. **Changez l'URL d'origine** : Remplacez `http://localhost:5173` par votre URL de production quand vous déployez
2. **Pour la production** : Utilisez une variable d'environnement :
   ```javascript
   "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGIN || "http://localhost:5173"
   ```
3. **Sécurité** : En production, spécifiez exactement les origines autorisées, ne pas utiliser `*`

