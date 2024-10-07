import crearUsuario from "./createUsuario";

const fakeData = async () => {
  // Crear un usuario de demostración
  await crearUsuario();

  console.log("Datos falsos creados correctamente");
};

export default fakeData;
