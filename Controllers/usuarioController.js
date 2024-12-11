const formularioLogin = (req, res) => {
  res.render("Auth/login", {
    pagina: "Iniciar Sesión",
  });
};
const formularioRegistro = (req, res) => {
  res.render("Auth/registro", {
    pagina: "Crear Cuenta",
  });
};
const registrar = (req, res) => {
  res.render("Auth/registro", {
    pagina: "Crear Cuenta",
  });
};
const formularioOlvidPass = (req, res) => {};

export { formularioLogin, formularioRegistro, formularioOlvidPass, registrar };
