const baseUrl =
  process.env.NODE_ENV === "production" && process.env.ROOT_DOMAIN
    ? process.env.ROOT_DOMAIN
    : `http://localhost:${process.env.PORT || "3000"}`;

export default baseUrl;
