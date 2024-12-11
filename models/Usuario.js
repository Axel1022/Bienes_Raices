import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Usuario = db.define("usuarios", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  token: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  confirmado: {
    type: DataTypes.BOOLEAN,
  },
});

export default Usuario;
