export interface Review {
  name: string;
  location: string;
  date: string;
  rating: number;
  body: string;
}

export const reviews: Review[] = [
  {
    name: "Carlos M.",
    location: "Houston, TX",
    date: "2026-06-09",
    rating: 5,
    body: "¡Excelente servicio! Llegaron a tiempo, explicaron todo claramente en español y dejaron todo impecable. Recomiendo totalmente a Latinos Plumbing para cualquier emergencia en Houston.",
  },
  {
    name: "José R.",
    location: "Cypress, TX 77433",
    date: "2026-06-08",
    rating: 5,
    body: "Un trabajo impecable desatascando la línea principal de drenaje. Honestos, profesionales y con precios justos sin sorpresas ni cobros ocultos.",
  },
  {
    name: "Elena G.",
    location: "Katy, TX",
    date: "2026-06-04",
    rating: 5,
    body: "Respuesta de emergencia súper rápida un domingo por la noche. Se nos rompió una tubería y llegaron en menos de 45 minutos. Gran alivio contar con ellos.",
  },
  {
    name: "Eduardo B.",
    location: "Houston, TX 77019",
    date: "2026-04-12",
    rating: 5,
    body: "Instalación de calentador de agua impecable. Puntuales, atentos y con la mejor garantía. El mejor equipo de plomería y servicios en Houston.",
  },
];
