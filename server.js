//Crear una función en JavaScript que lea un archivo html y lo muestre en un servidor
//Hugo Levick Alvarez Luna - 4B
const express = require("express");
const path = require("node:path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
