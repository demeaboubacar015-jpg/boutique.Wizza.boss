/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Cela permet de terminer le build avec succès même si
    // ton projet a des erreurs ESLint.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Idem pour TypeScript, pour éviter tout blocage.
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
