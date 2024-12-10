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
const formularioOlvidPass = (req, res) => {
  res.render("Auth/olvidePass", {
    pagina: "Recupera acceso a Bienes Raíces",
  });
};

export { formularioLogin, formularioRegistro, formularioOlvidPass };
