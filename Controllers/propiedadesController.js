//Muestras las propiedades en el home
const homePropiedades = (req, res) => {
  res.render("propiedades/admin", {
    pagina: "Mis Propiedades",
    navBar: true,
  });
};
//Formulario para crear las propiedades
const crearPropiedad = (req, res) => {
  res.render("propiedades/crearPropiedad", {
    pagina: "Crear Propiedad",
    navBar: true,
  });
};

export { homePropiedades, crearPropiedad };
