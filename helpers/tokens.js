import jwt from "jsonwebtoken";

const generarJWT = (datos) => {
  return jwt.sign(
    {
      id: datos.id,
      nombre: datos.nombre,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
};

const generarId = () => Math.random().toString(32) + Date.now().toString(32);
export { generarJWT, generarId };
