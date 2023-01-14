// const express = require('express');
import express from "express";
import cors from "cors";
import { config } from "dotenv";

const app = express();

config();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World, from express.App is running !");
});

//Start server
const port = 3000;
var ip = process.env.IP || "0.0.0.0";

app.listen(port, ip, () => {
  console.log(`Server running at http://localhost:${port}`);
});
