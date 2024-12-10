// const express = require("express");
import express from "express";
const app = express();
const port = 8080;

//Habilitar Pug
app.set("view engine", "pug");
app.set("views", "./Views");

//Archivos statics (carpetas públicas)
app.use(express.static("public"));

//Imports Routers
import usuarioRoutes from "./Router/usuarioRoutes.js";
import NotFund from "./Controllers/404Controller.js";

//Using Routers
app.use("/auth", usuarioRoutes);
app.use("/", NotFund);

// Starting the server
app.listen(port, () => {
  console.log(`Server running: http://localhost:8080/`);
});
