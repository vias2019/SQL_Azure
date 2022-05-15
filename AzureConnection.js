const { Connection } = require("tedious");

// Create connection to database
const config = {
  authentication: {
    options: {
      userName: "project", // update me
      password: "tcss*545" // update me
    },
    type: "default"
  },
  server: "moviedb.database.windows.net", // update me
  options: {
    database: "movie", //update me
    encrypt: true
  }
};

const connection = new Connection(config);

module.exports = {connection};