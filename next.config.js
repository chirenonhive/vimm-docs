/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // Add this to fix the React context issue
    providerImportSource: "@mdx-js/react",
    development: process.env.NODE_ENV === 'development'
  },
})

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  output: 'standalone',
  trailingSlash: false,
  images: {
    unoptimized: true
  },
  // Disable the new MDX compiler that's causing issues
  experimental: {
    mdxRs: false
  }
}

module.exports = withMDX(nextConfig)