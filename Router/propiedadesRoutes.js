import express from "express";
const router = express.Router();

// Importar controladores
import {
  homePropiedades,
  crearPropiedad,
} from "../Controllers/propiedadesController.js";

//Rutas

router.get("/propiedades", homePropiedades);
router.get("/propiedades/crear", crearPropiedad);
//Exportar rutas
export default router;
