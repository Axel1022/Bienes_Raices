import { validationResult } from "express-validator";

//Paso 1: Validar datos
const validarDatos = async (req, res, next) => {
  try {
    const validaciones = validationResult(req);
    if (!validaciones.isEmpty()) {
      const errores = validaciones.array();
      req.session.errores = errores;

     return res.redirect("/propiedades/crear");
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

//Paso 2: Crear propiedad
const CrearPropiedad = async (req, res, next) => {
  
};
export { validarDatos };
