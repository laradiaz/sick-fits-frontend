const endpoint = `http://localhost:3000/api/graphql`;
const prodEndpoint = `https://sick-fits-backend.onrender.com/api/graphql`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: () => [
    {
      source: '/api/graphql',
      destination:
        process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
    },
  ],
};

module.exports = nextConfig;
