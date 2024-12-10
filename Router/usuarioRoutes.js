import express from "express";
const router = express.Router();
import {
  formularioLogin,
  formularioRegistro,
} from "../Controllers/usuarioController.js";

router.get("/login", formularioLogin);
router.get("/registro", formularioRegistro);

export default router;
