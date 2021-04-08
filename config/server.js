module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 80),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '387b202d9d71b075096d0ebcf0945fae'),
    },
  },
});
