import CategoriaModel from "../Models/Categoria.js";
import PrecioModel from "../Models/Precio.js";

const obtenerCategoriasYPrecios = async () => {
  try {
    const [categorias, precios] = await Promise.all([
      CategoriaModel.findAll(),
      PrecioModel.findAll(),
    ]);

    const categoriasMap = categorias.map(({ dataValues }) => dataValues);
    const preciosMap = precios.map(({ dataValues }) => dataValues);

    return { categoriasMap, preciosMap };
  } catch (error) {
    console.error("Error al obtener categorías y precios:", error);
    throw error;
  }
};

export { obtenerCategoriasYPrecios };
