/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  disable: false,

  // disable: process.env.NODE_ENV === 'development',
  // register: true,
  // scope: '/app',
  // sw: 'service-worker.js',
  //...
});

module.exports = {
  experimental: {
    appDir: true,
  },
  env: {
    PGHOST: "ep-dry-mountain-366119.ap-southeast-1.aws.neon.tech",
    PGDATABASE: "neondb",
    PGUSER: "shehza-d",
    PGPASSWORD: "3xIlhWUwCsZ9",
  },
};

// module.exports = withPWA({
//   experimental: {
//     appDir: true,
//   },
// });
