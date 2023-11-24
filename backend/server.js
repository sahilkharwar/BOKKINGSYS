const express = require("express");
const connectToDB = require("./db");

const app = express();
const PORT = 5000;
const mongoURI = "mongodb://127.0.0.1:27017/BOKKINGSYS";

connectToDB(mongoURI);

app.listen(PORT, () => {
  console.log(`hello, world!/nThe server is listening on port: ${PORT}`);
});
