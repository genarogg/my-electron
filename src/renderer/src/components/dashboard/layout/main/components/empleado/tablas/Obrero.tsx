import EmpleadoTable from "../Empleado";

interface ObrerosProps {}

const Obreros: React.FC<ObrerosProps> = () => {
  return (
    <EmpleadoTable
      tipo="obrero"
      nameTablet="Obreros"
      ir="agregar Obrero"
      irAnadirEmpleado={() => console.log("ir a añadir Obreros")}
    />
  );
};

export default Obreros;
