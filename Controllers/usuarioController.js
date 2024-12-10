const formularioLogin = (req, res) => {
  res.render("Auth/login", {
  });
};
const formularioRegistro = (req, res) => {
  res.render("Auth/registro", {});
};

export { formularioLogin, formularioRegistro };
