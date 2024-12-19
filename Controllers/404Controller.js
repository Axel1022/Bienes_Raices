const NotFUnd = (req, res) => {
  res.status(404).render("404", {
    pagina: "Página no encontrada",
  });
};
export default NotFUnd;
