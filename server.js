// const express = require('express');
import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import userRoutes from './routes/userRoutes.js'

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World, from express.App is running !");
});

//Start server
const port = process.env.port || 3000;
const ip = process.env.IP || "0.0.0.0";

app.listen(port, ip, () => {
  console.log(`Server running at http://localhost:${port}`);
});
