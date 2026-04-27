export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://fsad-sdp-33-backend-33.onrender.com";

export const apiUrl = (path) => `${API_BASE_URL}${path}`;
