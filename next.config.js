/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable strict linting during build for faster deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Enable compression
  compress: true,
  
  // Optimize chunks
  experimental: {
    optimizePackageImports: ['react', 'react-dom']
  },
  
  // Enable static optimization
  trailingSlash: false,
  
  // Headers for performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // Redirect all traffic to new domain
  // async redirects() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       destination: 'https://www.samuelfunmilayo.space/$1',
  //       permanent: true,
  //     },
  //   ]
  // },
}

module.exports = nextConfig