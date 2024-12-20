const propiedades = (req, res) => {
  res.render("propiedades/admin", {
    pagina: "Mis Propiedades",
    navBar: true,
  });
};

export { propiedades };
