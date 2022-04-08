export const awsS3Url = "https://arrigoni.s3.sa-east-1.amazonaws.com";

export const isBrowser = typeof window !== "undefined";

export const isProduction = process.env.NODE_ENV === "production";

export const baseUrl = isProduction
  ? "https://arrigoni.in"
  : "http://localhost:3000";

export const redirections = [
  {
    path: "resume",
    redirect: `${awsS3Url}/Francisco+Arrigoni+-+Resume.pdf`,
  },
  { path: "whatsapp", redirect: "https://wa.me/5492995769384/" },
  { path: "portfolio", redirect: "https://arrigoni.in/" },
  { path: "linkedin", redirect: "https://linkedin.com/in/franciscloudz/" },
  { path: "github", redirect: "https://github.com/franciscloudz/" },
  { path: "instagram", redirect: "https://instagram.com/franciscloudz/" },
  { path: "twitter", redirect: "https://twitter.com/franciscloudz/" },
  { path: "facebook", redirect: "https://facebook.com/franciscloudz/" },
];
