import app from "./app.js";
import connectiondb from "./config/db.js";

const port = process.env.PORT || 8080;

const startServer = async () => {
  try {
    await connectiondb.authenticate();
    console.log("✅ Conexión a la base de datos exitosa");

    await connectiondb.sync();
    console.log("✅ Base de datos sincronizada");

    app.listen(port, () => {
      console.log(`🚀 Servidor iniciado en http://localhost:${port}/`);
    });
  } catch (error) {
    console.error("❌ Error al iniciar el servidor:", error);
    process.exit(1);
  }
};

startServer();
