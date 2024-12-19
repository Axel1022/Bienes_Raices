import express from "express";
const router = express.Router();

// Importar controladores
import { propiedades } from "../Controllers/propiedadesController.js";

//Rutas

router.get("/propiedades", propiedades);
//Exportar rutas
export default router;
