import categorias from "./categorias.js";
import Categoria from "../Models/Categoria.js";
import precios from "./precios.js";
import Precio from "../Models/Precio.js";
import db from "../config/db.js";
import { where } from "sequelize";

const importarDatos = async () => {
  try {
    //Autenticar
    await db.authenticate();
    //Generar columnas
    await db.sync();
    //Importar datos en paralelo
    await Promise.all([
      Categoria.bulkCreate(categorias),
      Precio.bulkCreate(precios),
    ]);

    console.log("Datos importados exitosamente");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
const eliminarDatos = async () => {
  try {
    await Promise.all([
      Categoria.destroy({ where: {}, truncate: true }),
      Precio.destroy({ where: {}, truncate: true }),
    ]);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
if (process.argv[2] === "-i") {
  importarDatos();
}
if (process.argv[2] === "-e") {
  eliminarDatos();
}
