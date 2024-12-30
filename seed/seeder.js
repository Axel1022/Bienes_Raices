import categorias from "./categorias.js";
import precios from "./precios.js";
//Importar relaciones
import { Precio, Categoria } from "../Models/Relaciones.js";
import usuarios from "./usuarios.js";
import Usuario from "../Models/Usuario.js";
import db from "../config/db.js";

const importarDatos = async () => {
  try {
    //Autenticar
    await db.authenticate();
    //Generar columnas
    await db.sync();
    //Importar datos en paralelo
    await Promise.all([
      Precio.bulkCreate(precios),
      Usuario.bulkCreate(usuarios), //Hay que salar la contracena
      Categoria.bulkCreate(categorias),
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
    // await Promise.all([
    //   Precio.destroy({ where: {}, truncate: true }),
    //   Usuario.destroy({ where: {}, truncate: true }),
    //   Categoria.destroy({ where: {}, truncate: true }),
    // ]);

    await db.sync({ force: true });
    console.log("Datos eliminados exitosamente");
    process.exit();
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
