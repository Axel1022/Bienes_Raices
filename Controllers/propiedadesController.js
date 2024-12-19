const propiedades = (req, res) => {
  res.render("propiedades/admin", {
    pagina: "Gestión de Propiedades",
  });
};

export { propiedades };
