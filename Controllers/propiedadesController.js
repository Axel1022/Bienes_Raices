import CategoriaModel from "../Models/Categoria.js";
import PrecioModel from "../Models/Precio.js";

//Muestras las propiedades en el home
const homePropiedades = (req, res) => {
  res.render("propiedades/admin", {
    pagina: "Mis Propiedades",
    navBar: true,
  });
};
//Formulario para crear las propiedades
const crearPropiedad = async (req, res) => {
  const [categorias, precios] = await Promise.all([
    CategoriaModel.findAll(),
    PrecioModel.findAll(),
  ]);

  //Devuelve los datos mapeados (solos los que estan en dataValues)
  // Verifica si hay datos... ( dato.length ? proceso : [])
  const categoriasMap = categorias.length
    ? categorias.map(({ dataValues }) => dataValues)
    : [];
  const preciosMap = precios.length
    ? precios.map(({ dataValues }) => dataValues)
    : [];

  console.log(categoriasMap);
  res.render("propiedades/crearPropiedad", {
    pagina: "Crear Propiedad",
    navBar: true,
    Categorias: categoriasMap,
    Precios: preciosMap,
  });
};

export { homePropiedades, crearPropiedad };
