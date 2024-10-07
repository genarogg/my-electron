import EmpleadoTable from "../Empleado";

interface CocinerosProps {}

const Cocineros: React.FC<CocinerosProps> = () => {
  return (
    <EmpleadoTable
      tipo="cocinero"
      nameTablet="Cocineros"
      ir="agregar empleado"
      irAnadirEmpleado={() => console.log("ir a añadir Obreros")}
    />
  );
};

export default Cocineros;
