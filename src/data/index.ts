export const awsS3Url = "https://arrigoni.s3.sa-east-1.amazonaws.com";

export const isBrowser = typeof window !== "undefined";

export const redirections = [
  {
    path: "resume",
    redirect: `${awsS3Url}/Francisco+Arrigoni+-+Resume.pdf`,
  },
  { path: "whatsapp", redirect: "https://wa.me/5492995769384/" },
  { path: "portfolio", redirect: "https://arrigoni.in/" },
  { path: "linkedin", redirect: "https://linkedin.com/in/francixcloudz/" },
  { path: "github", redirect: "https://github.com/francixcloudz/" },
  { path: "instagram", redirect: "https://instagram.com/francixcloudz/" },
  { path: "twitter", redirect: "https://twitter.com/francixcloudz/" },
  { path: "facebook", redirect: "https://facebook.com/francixcloudz/" },
];
