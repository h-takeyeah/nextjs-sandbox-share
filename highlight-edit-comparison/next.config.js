/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  experimental: {
    esmExternals: true,
  }
}

const withAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.NODE_ENV === 'production',
})

const removeImports = require('next-remove-imports')({
  options: { },
})

module.exports = withAnalyzer(removeImports(nextConfig))
