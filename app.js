import express from "express";
import usuarioRoutes from "./Router/usuarioRoutes.js";
import NotFund from "./Controllers/404Controller.js";

const app = express();

// Configuración
app.set("view engine", "pug");
app.set("views", "./Views");
app.use(express.static("public"));

// Middleware para analizar JSON
app.use(express.json());

// Middleware para analizar datos codificados
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use("/auth", usuarioRoutes);
app.use("/", NotFund);

// Middleware para manejar errores 404
app.use((req, res, next) => {
  res.status(404).render("404", { title: "Página no encontrada" });
});

// Middleware para manejar errores generales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render("500", { title: "Error del servidor" });
});

export default app;
