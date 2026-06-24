/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // Sert le CV statique (public/cv/index.html) à l'URL propre garros.ai/cv
      { source: "/cv", destination: "/cv/index.html" },
    ];
  },
};

export default nextConfig;
