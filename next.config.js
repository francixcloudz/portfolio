module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "localhost",
      "arrigoni.in",
      "arrigoni.s3.sa-east-1.amazonaws.com",
    ],
  },
};
