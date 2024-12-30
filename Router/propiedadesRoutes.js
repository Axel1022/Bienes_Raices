import express from "express";
import { body } from "express-validator";
const router = express.Router();

// Importar controladores
import { homePropiedades } from "../Controllers/Propiedades/homePropiedades.js";

import {
  buscarCategoriasyPrecios,
  mapearCategoriasyPrecios,
  mostrarFormulario,
} from "../Controllers/Propiedades/formularioPropiedad.js";

import { validarDatos } from "../Controllers/Propiedades/crearPropiedad.js";

//Rutas
router.get("/propiedades", homePropiedades);
router.get(
  "/propiedades/crear",
  buscarCategoriasyPrecios,
  mapearCategoriasyPrecios,
  mostrarFormulario
);
router.post(
  "/propiedades/crear",
  body("titulo", "El título no puede estar vacío").notEmpty(),
  body("descripcion", "La descripción no puede estar vacía").notEmpty(),
  body("categoria", "La categoría es obligatoria").notEmpty(),
  body("precio", "El precio es obligatorio").notEmpty(),
  body("habitaciones", "El número de habitaciones es obligatorio").notEmpty(),
  body("parqueos", "El número de parqueos es obligatorio").notEmpty(),
  body("banos", "El número de baños no puede estar vacío").notEmpty(),
  body("calle", "Ubica la propiedad en el mapa.").notEmpty(),
  validarDatos
);

//Exportar rutas
export default router;
