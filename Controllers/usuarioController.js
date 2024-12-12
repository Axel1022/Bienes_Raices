import { check, validationResult } from "express-validator";
import { generarId } from "../helpers/tokens.js";
import { emailRegistro } from "../helpers/email.js";
import Usuario from "../Models/Usuario.js";

const formularioLogin = async (req, res) => {
  res.render("auth/login", {
    pagina: "Iniciar Sesión",
  });
};
const formularioRegistro = async (req, res) => {
  res.render("auth/registro", {
    pagina: "Crear Cuenta",
  });
};
const registrar = async (req, res, next) => {
  //Validaciones
  await check("nombre", "El nombre es obligatorio.").notEmpty().run(req);
  await check("correo", "El correo es obligatorio.").notEmpty().run(req);
  await check("correo", "Debe ser un correo válido.").isEmail().run(req);
  await check("contrasena", "La contraseña debe tener al menos 8 caracteres.")
    .isLength({ min: 8 })
    .run(req);
  await check("Ccontrasena", "Las contraseñas deben coincidir.")
    .custom((value, { req }) => value === req.body.contrasena)
    .run(req);

  let resultado = validationResult(req);

  if (!resultado.isEmpty()) {
    return res.render("auth/registro", {
      pagina: "Crear Cuenta",
      errores: resultado.array(),
      usuario: {
        nombre: req.body.nombre,
        correo: req.body.correo,
        contrasena: req.body.contrasena,
        Ccontrasena: req.body.Ccontrasena,
      },
    });
  }
  const existeEmail = await Usuario.findOne({
    where: { email: req.body.correo },
  });
  if (existeEmail) {
    return res.render("auth/registro", {
      pagina: "Crear Cuenta",
      errores: [{ msg: "Este correo ya está en uso." }],
      usuario: {
        nombre: req.body.nombre,
        correo: req.body.correo,
      },
    });
  }
  const usuario= await Usuario.create({
    nombre: req.body.nombre,
    email: req.body.correo,
    password: req.body.contrasena,
    token: generarId(),
    confirmado: false,
  });

  //Enviar correo de activación
  emailRegistro({
    nombre: usuario.nombre,
    email: usuario.email,
    token: usuario.token
  });

  res.render("templatess/mensaje", {
    pagina: "Registro Exitoso",
    mensaje:
      "Tu cuenta ha sido creada exitosamente. Revisa tu correo para activar tu cuenta.",
    url: "/auth/login",
    titulo: "Ir al Inicio de Sesión",
  });
};
const formularioOlvidPass = async (req, res) => {};

export { formularioLogin, formularioRegistro, formularioOlvidPass, registrar };
