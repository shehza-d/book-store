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
};

// env: {
//   PGHOST: "e,
//   PGDATABASE: "neondb",
//   PGUSER: "shehza-d",
//   PGPASSWORD: "",
// },

// module.exports = withPWA({
//   experimental: {
//     appDir: true,
//   },
// });
