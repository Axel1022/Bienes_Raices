import express from "express";
const router = express.Router();
import {
  formularioLogin,
  formularioRegistro,
  formularioOlvidPass,
  registrar,
  confirmar,
} from "../Controllers/usuarioController.js";

router.get("/login", formularioLogin);
router.get("/registro", formularioRegistro);
router.post("/registro", registrar);
router.get("/confirmar/:token", confirmar);
router.get("/olvide-pass", formularioOlvidPass);

export default router;
