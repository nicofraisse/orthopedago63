/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/orthopedagogie",
      },
    ];
  },
};

module.exports = nextConfig;
