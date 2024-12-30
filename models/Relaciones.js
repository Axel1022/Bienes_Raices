import Propiedad from "./Propiedad.js";
import Usuario from "./Usuario.js";
import Categoria from "./Categoria.js";
import Precio from "./Precio.js";

//Relaciones
//Propiedad tiene 1 usuario
Propiedad.belongsTo(Usuario);

//Propiedad tiene 1 categoria
Propiedad.belongsTo(Categoria);

//Propiedad tiene 1 precio
Propiedad.belongsTo(Precio);
// Precio.hasOne(Propiedad); //Otra forma



export { Propiedad, Categoria, Precio, Usuario };
