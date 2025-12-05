// Configuration de l'API
// Pour Vite, utilisez VITE_API_URL dans votre fichier .env
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || "https://email-free.vercel.app",
  ENDPOINTS: {
    INSCRIPTION: "/api/7synergo",
    CONTACT: "/api/7synergo-contact",
    NEWSLETTER: "/api/7synergo-newsletter",
  },
};

export const getApiUrl = (endpoint) => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

