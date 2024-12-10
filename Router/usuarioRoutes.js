import express from "express";
const router = express.Router();
import {
  formularioLogin,
  formularioRegistro,
  formularioOlvidPass,
} from "../Controllers/usuarioController.js";

router.get("/login", formularioLogin);
router.get("/registro", formularioRegistro);
router.get("/olvide-pass", formularioOlvidPass);

export default router;
