require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./database/config");
const app = express();
const PORT = process.env.PORT || 4000;

dbConnection();
app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  return res.json({
    msg: "Bienvenido al api",
    author: process.env.AUTHOR,
  });
});

app.use("/api/tasks", require("./routes/tasks.routes"));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
