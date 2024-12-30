import CategoriaModel from "../../Models/Categoria.js";
import PrecioModel from "../../Models/Precio.js";

//Mostrar formulario (Pasos: 3)
//Paso 1: Buscar Categorias y precios en la base de datos
const buscarCategoriasyPrecios = async (req, res, next) => {
  try {
    const [categorias, precios] = await Promise.all([
      CategoriaModel.findAll(),
      PrecioModel.findAll(),
    ]);

    // Guardamos los resultados en req para pasarlos al siguiente middleware
    req.categorias = categorias;
    req.precios = precios;
    next();
  } catch (error) {
    next(error);
  }
};

//Paso 2: Mapear los datos traidos de la base de datos
const mapearCategoriasyPrecios = (req, res, next) => {
  try {
    const { categorias, precios } = req; // Obtenemos los datos desde req

    const categoriasMap = categorias.length
      ? categorias.map(({ dataValues }) => dataValues)
      : [];

    const preciosMap = precios.length
      ? precios.map(({ dataValues }) => dataValues)
      : [];

    // Guardamos los resultados mapeados en req para el siguiente middleware
    req.categoriasMap = categoriasMap;
    req.preciosMap = preciosMap;

    next();
  } catch (error) {
    next(error);
  }
};

//Paso 3: Mostrar el formulario
const mostrarFormulario = async (req, res) => {
  try {
    const { categoriasMap, preciosMap } = req;


    res.render("propiedades/crearPropiedad", {
      pagina: "Crear Propiedad",
      navBar: true,
      Categorias: categoriasMap,
      Precios: preciosMap,
      errores: res.locals.errores,
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  buscarCategoriasyPrecios,
  mapearCategoriasyPrecios,
  mostrarFormulario,
};
