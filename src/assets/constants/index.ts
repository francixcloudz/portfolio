export const awsS3Url = "https://arrigoni.s3.sa-east-1.amazonaws.com";

export const testEmail = "error_case@test.com";

export const headDescription = `Marca Propia: Desarrollado, elaborado, y supervisado por farmaceuticos a con ciencia, conocimiento, y compromiso`;

export const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://arrigoni.in";

export const redirections = [
  {
    path: "resume",
    redirect:
      "https://arrigoni.s3.sa-east-1.amazonaws.com/Francisco+Arrigoni+-+Resume.pdf",
  },
  { path: "whatsapp", redirect: "https://wa.me/5492995769384/" },
  { path: "portfolio", redirect: "https://arrigoni.in/" },
  { path: "linkedin", redirect: "https://linkedin.com/in/franciscloudz/" },
  { path: "github", redirect: "https://github.com/franciscloudz/" },
  { path: "instagram", redirect: "https://instagram.com/franciscloudz/" },
  { path: "twitter", redirect: "https://twitter.com/franciscloudz/" },
  { path: "facebook", redirect: "https://facebook.com/franciscloudz/" },
];
