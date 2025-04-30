const express = require("express");
const app = express();

const db = require("./models");

const PORT = 3001;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port:http://localhost:${PORT} `);
  });
});
