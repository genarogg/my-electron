import React, { useState } from "react";
import { Input } from "@form";
import { CheckboxBasic, BtnSubmitBasic } from "@btn";
import { notify } from "@nano";
import LayoutForm from "../../layoutForm/LayoutForm";
import { BsEnvelopeFill } from "react-icons/bs";
import { useSimpleNav } from "@components/state/useSimpleNav";

interface AddEmpleadoProps {
  tipo_empleado: string;
}

const AddEmpleado: React.FC<AddEmpleadoProps> = ({ tipo_empleado }) => {
  const [formData, setFormData] = useState({
    tipo_empleado: "",
    nombres: "",
    apellidos: "",
    ci: "",
    fecha_nac: "",
    telefono: "",
    correo_electronico: "",
    fecha_ingreso_mppe: "",
    direccion_de_habitacion: "",
    codigo_cargo: "",
    dependencia_nominal: "",
    estatus: "",
    reposo_permiso: "",
    anos_servicio: "",
    titulo_obtenido: "",
    titulo_pregrado: "",
    area_docente_especialista: "",
    grado_seccion: "",
    funcion_trabajo: "",
    acarigua: "",

    inscrito_psuv: "",
    pertenece_movimiento_social: "",
    carnet_patria_codigo: "",
    carnet_patria_serial: "",
    centro_votacion: "",
    tipo_voto: "",
    observaciones: "",
  });

  const { state, handleChangeContext } = useSimpleNav();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    console.log("URL_BACKEND", `/administrativo/add`);

    fetch(`/administrativo/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        notify({ message: data.message, type: data.type });
        handleChangeContext(state.sub_context, "");
        console.log("data", data);
        console.log(data);
      });
  };

  return (
    <LayoutForm>
      <div className="container-form add-empleado">
        <form
          className="form-basic"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(e);
          }}
        >
          <Input
            type="text"
            icono={<BsEnvelopeFill />}
            placeholder="Nombres"
            name="nombres"
            value={formData.nombres}
            valueChange={(e) =>
              setFormData({ ...formData, nombres: e.target.value })
            }
          />
          <Input
            type="text"
            icono={<BsEnvelopeFill />}
            placeholder="Apellidos"
            name="apellidos"
            value={formData.apellidos}
            valueChange={(e) =>
              setFormData({ ...formData, apellidos: e.target.value })
            }
          />
          <Input
            type="text"
            icono={<BsEnvelopeFill />}
            placeholder="Cédula de Identidad"
            name="ci"
            value={formData.ci}
            valueChange={(e) =>
              setFormData({ ...formData, ci: e.target.value })
            }
          />
          <Input
            type="date"
            placeholder="Fecha de Nacimiento"
            name="fecha_nac"
            value={formData.fecha_nac}
            valueChange={(e) =>
              setFormData({ ...formData, fecha_nac: e.target.value })
            }
          />

          <Input
            type="text"
            icono={<BsEnvelopeFill />}
            placeholder="Teléfono"
            name="telefono"
            value={formData.telefono}
            valueChange={(e) =>
              setFormData({ ...formData, telefono: e.target.value })
            }
          />
          <Input
            type="text"
            icono={<BsEnvelopeFill />}
            placeholder="Dirección de Habitación"
            name="direccion_de_habitacion"
            value={formData.direccion_de_habitacion}
            valueChange={(e) =>
              setFormData({
                ...formData,
                direccion_de_habitacion: e.target.value,
              })
            }
          />

          <Input
            type="email"
            icono={<BsEnvelopeFill />}
            placeholder="Correo Electrónico"
            name="correo_electronico"
            value={formData.correo_electronico}
            valueChange={(e) =>
              setFormData({ ...formData, correo_electronico: e.target.value })
            }
          />
          <Input
            type="date"
            placeholder="Fecha de Ingreso al MPPE"
            name="fecha_ingreso_mppe"
            value={formData.fecha_ingreso_mppe}
            valueChange={(e) =>
              setFormData({ ...formData, fecha_ingreso_mppe: e.target.value })
            }
          />

          <Input
            type="text"
            icono={<BsEnvelopeFill />}
            placeholder="Años de Servicio"
            name="anos_servicio"
            value={formData.anos_servicio}
            valueChange={(e) =>
              setFormData({ ...formData, anos_servicio: e.target.value })
            }
          />
          <Input
            type="text"
            icono={<BsEnvelopeFill />}
            placeholder="Título Obtenido"
            name="titulo_obtenido"
            value={formData.titulo_obtenido}
            valueChange={(e) =>
              setFormData({ ...formData, titulo_obtenido: e.target.value })
            }
          />
          <Input
            type="text"
            icono={<BsEnvelopeFill />}
            placeholder="Código de Cargo"
            name="codigo_cargo"
            value={formData.codigo_cargo}
            valueChange={(e) =>
              setFormData({ ...formData, codigo_cargo: e.target.value })
            }
          />
          <Input
            type="text"
            icono={<BsEnvelopeFill />}
            placeholder="Dependencia Nominal"
            name="dependencia_nominal"
            value={formData.dependencia_nominal}
            valueChange={(e) =>
              setFormData({ ...formData, dependencia_nominal: e.target.value })
            }
          />
          <Input
            type="text"
            icono={<BsEnvelopeFill />}
            placeholder="Estatus"
            name="estatus"
            value={formData.estatus}
            valueChange={(e) =>
              setFormData({ ...formData, estatus: e.target.value })
            }
          />
          <Input
            type="text"
            icono={<BsEnvelopeFill />}
            placeholder="Reposo o Permiso"
            name="reposo_permiso"
            value={formData.reposo_permiso}
            valueChange={(e) =>
              setFormData({ ...formData, reposo_permiso: e.target.value })
            }
          />
        </form>
      </div>
    </LayoutForm>
  );
};

export default AddEmpleado;
