import express from "express";
const router = express.Router();
import {
  formularioLogin,
  formularioRegistro,
  formularioOlvidPass,
  registrar,
} from "../Controllers/usuarioController.js";

router.get("/login", formularioLogin);
router.get("/registro", formularioRegistro);
router.post("/registro", registrar);
router.get("/olvide-pass", formularioOlvidPass);

export default router;
