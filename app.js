import express from "express";
import cookieParser from "cookie-parser";
import usuarioRoutes from "./Router/usuarioRoutes.js";
import proiedadesRoutes from "./Router/propiedadesRoutes.js";
import NotFund from "./Controllers/404Controller.js";
import session from "express-session";
import flash from "connect-flash";

const app = express();

// Configuración
app.set("view engine", "pug");
app.set("views", "./Views");
app.use(express.static("public"));

// Middleware para analizar JSON
app.use(express.json());

// Middleware para analizar datos codificados
app.use(express.urlencoded({ extended: true }));

// Configuración de sesiones
app.use(
  session({
    secret: "clavePrueba",
    resave: false,
    saveUninitialized: true,
  })
);

// Middleware para pasar mensajes flash a las vistas
// Para que todas las vistas tengan los mensajes de errores
app.use((req, res, next) => {
  res.locals.errores = req.session.errores || null;
  delete req.session.errores;
  next();
});

// Middleware - Rutas
app.use("/auth", usuarioRoutes);
app.use("/", proiedadesRoutes);
app.use("/", NotFund);

export default app;
