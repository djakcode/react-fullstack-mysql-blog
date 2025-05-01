const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const db = require("./models");

const PORT = 3001;

// Routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port:http://localhost:${PORT} `);
  });
});
