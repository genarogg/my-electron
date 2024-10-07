import EmpleadoTable from "../Empleado";

interface DocenteProps {}

const Docente: React.FC<DocenteProps> = () => {
  return (
    <EmpleadoTable
      tipo="docente"
      nameTablet="docentes"
      ir="agregar empleado"
      irAnadirEmpleado={() => console.log("ir a añadir docente")}
    />
  );
};

export default Docente;
