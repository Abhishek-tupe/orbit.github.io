/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  basePath: '/orbit.github.io',

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
}

export default nextConfig
