/* eslint-disable prettier/prettier */
export default () => ({
  port: parseInt(process.env.PORT || '4000', 10),
  jwt: {
    secret: process.env.JWT_SECRET || 'S0uKzx3QhKzQ4jHqZKxBZTn3m2j0I7KxOQxR3a7MJZw111',
    expiresIn: process.env.JWT_EXPIRES_IN || '1d',
  },
  database: {
    uri: process.env.MONGO_URI,
  },
});
