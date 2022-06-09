module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async headers() {
    return [
      {
        source: "/party",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' *.mercadolibre.com",
          },
        ],
      },
    ];
  },
  compiler: {
    styledComponents: true,
    ssr: true,
    displayName: true,
  },
  images: {
    domains: ["localhost", "arrigoni.in", "arrigoni.s3.sa-east-1.amazonaws.com"],
  },
};
