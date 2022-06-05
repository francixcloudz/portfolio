const baseUrl =
  process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_ROOT_DOMAIN
    ? process.env.NEXT_PUBLIC_ROOT_DOMAIN
    : `http://localhost:${process.env.PORT || "3000"}`;

export default baseUrl;
