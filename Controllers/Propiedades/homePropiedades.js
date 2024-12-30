//Muestras las propiedades en el home
const homePropiedades = (req, res) => {
  res.render("propiedades/admin", {
    pagina: "Mis Propiedades",
    navBar: true,
  });
};

export { homePropiedades };
