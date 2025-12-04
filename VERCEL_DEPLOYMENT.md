# Guide de Déploiement Vercel

## Configuration pour Vercel

Le projet est maintenant configuré pour Vercel avec les fichiers suivants :

### 1. `vercel.json`
- Configure les rewrites pour rediriger toutes les routes vers `index.html` (nécessaire pour React Router)
- Configure les headers de sécurité
- Spécifie le framework Vite et le dossier de build

### 2. Routes corrigées
- Toutes les routes commencent maintenant par `/` (ex: `/inscription` au lieu de `inscription`)

## Étapes de déploiement

### Option 1 : Via l'interface Vercel
1. Allez sur [vercel.com](https://vercel.com)
2. Importez votre repository GitHub
3. Vercel détectera automatiquement :
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Cliquez sur "Deploy"

### Option 2 : Via Vercel CLI
```bash
npm i -g vercel
vercel
```

## Vérifications importantes

1. **Build Command** : `npm run build`
2. **Output Directory** : `dist`
3. **Install Command** : `npm install` (automatique)

## Si vous avez encore des erreurs 404

1. Vérifiez que `vercel.json` est à la racine du projet
2. Redéployez après avoir poussé les changements
3. Vérifiez les logs de build dans Vercel Dashboard

## Variables d'environnement (si nécessaire)

Si vous avez besoin de variables d'environnement :
1. Allez dans Vercel Dashboard > Settings > Environment Variables
2. Ajoutez vos variables (ex: `VITE_API_URL`)

