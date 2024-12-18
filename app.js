import express from "express";
import csrf from "csurf";
import cookieParser from "cookie-parser";
import usuarioRoutes from "./Router/usuarioRoutes.js";
import NotFund from "./Controllers/404Controller.js";

const app = express();

// Configuración
app.set("view engine", "pug");
app.set("views", "./Views");
app.use(express.static("public"));

// app.use(cookieParser());

// // Middleware para generar CSRF token
// app.use(csrf({ cookie: true }));

// Middleware para analizar JSON
app.use(express.json());

// Middleware para analizar datos codificados
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use("/auth", usuarioRoutes);
app.use("/", NotFund);

export default app;
