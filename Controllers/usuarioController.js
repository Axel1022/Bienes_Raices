const formularioLogin = async (req, res) => {
  res.render("Auth/login", {
    pagina: "Iniciar Sesión",
  });
};
const formularioRegistro = async (req, res) => {
  res.render("Auth/registro", {
    pagina: "Crear Cuenta",
  });
};
const registrar = async (req, res) => {
  res.render("Auth/registro", {
    pagina: "Crear Cuenta",
  });
};
const formularioOlvidPass = async (req, res) => {};

export { formularioLogin, formularioRegistro, formularioOlvidPass, registrar };
