const sharedConfig = {
  client: "sqlite3",
  useNullAsDefault: true,
  pool: {
    afterCreate: (conn, done) => {
      conn.run("PRAGMA foreign_keys = ON", done);
    },
  },
  migrations: {
    directory: "./database/migrations"
  },
  seeds: {
    directory: "./database/seeds"
  }
};

module.exports = {
  development: {
    ...sharedConfig,
    connection: {
      filename: './database/auth.db3'
    },
  },

  testing: {
    ...sharedConfig,
    connection: {
      filename: "./database/test.db3"
    },
  },
};
