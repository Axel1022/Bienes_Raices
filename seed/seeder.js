import categorias from "./categorias.js";
import Categoria from "../Models/Categoria.js";
import precios from "./precios.js";
import Precio from "../Models/Precio.js";
import db from "../config/db.js";

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
if (process.argv[2] === "-i") {
  importarDatos();
}
