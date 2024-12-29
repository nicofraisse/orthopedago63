/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
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
