import React, { useState } from "react";
import { Input } from "@form";
import { CheckboxBasic, BtnSubmitBasic, BtnText } from "@btn";
import { notify } from "@nano";
import { BsEnvelopeFill } from "react-icons/bs";

import { useSimpleNav } from "@components/state/useSimpleNav";



import LayoutForm from "../../layoutForm/LayoutForm";

interface AddCocineroProps {}

const AddCocinero: React.FC<AddCocineroProps> = () => {
  const [formData, setFormData] = useState({
    cod_cir: "",
    nombre_circuito: "",
    comuna: "",
    consejo_comunal: "",
    codigo_plantel: "",
    codigo_estadistico: "",
    codigo_dependencia: "",
    nombre_plantel: "",
    direccion_institucion: "",
    nivel_modalidad: "",
    nombres: "",
    apellidos: "",
    ci: "",

    fecha_nac: "",
    telefono: "",
    direccion_de_habitacion: "",
    correo_electronico: "",
    fecha_ingreso_mppe: "",
    anos_servicio: "",
    titulo_obtenido: "",
    codigo_cargo: "",
    dependencia_nominal: "",
    estatus: "",
    reposo_permiso: "",
    inscrito_psuv: "",
    pertenece_movimiento_social: "",
    carnet_patria_codigo: "",
    carnet_patria_serial: "",
    centro_votacion: "",
    tipo_voto: "",
    observaciones: "",
  });

  const { state, selectedContext, handleChangeContext } = useSimpleNav();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    console.log("URL_BACKEND", `-/cocinero/add`);

    fetch(`-/cocinero/add`, {
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
      <div className="container-form add-docente">
        <form
          className="form-basic "
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(e);
          }}
        >
          <Input
            type="text"
            icono={<BsEnvelopeFill />}
            placeholder="Código Circuito"
            name="cod_cir"
            value={formData.cod_cir}
            valueChange={(e) =>
              setFormData({ ...formData, cod_cir: e.target.value })
            }
          />
          <Input
            type="text"
            icono={<BsEnvelopeFill />}
            placeholder="Nombre Circuito"
            name="nombre_circuito"
            value={formData.nombre_circuito}
            valueChange={(e) =>
              setFormData({ ...formData, nombre_circuito: e.target.value })
            }
          />
          <Input
            type="text"
            icono={<BsEnvelopeFill />}
            placeholder="Comuna"
            name="comuna"
            value={formData.comuna}
            valueChange={(e) =>
              setFormData({ ...formData, comuna: e.target.value })
            }
          />
          <Input
            type="text"
            icono={<BsEnvelopeFill />}
            placeholder="Consejo Comunal"
            name="consejo_comunal"
            value={formData.consejo_comunal}
            valueChange={(e) =>
              setFormData({ ...formData, consejo_comunal: e.target.value })
            }
          />
          <Input
            type="text"
            icono={<BsEnvelopeFill />}
            placeholder="Código Plantel"
            name="codigo_plantel"
            value={formData.codigo_plantel}
            valueChange={(e) =>
              setFormData({ ...formData, codigo_plantel: e.target.value })
            }
          />
          <Input
            type="text"
            icono={<BsEnvelopeFill />}
            placeholder="Código Estadístico"
            name="codigo_estadistico"
            value={formData.codigo_estadistico}
            valueChange={(e) =>
              setFormData({ ...formData, codigo_estadistico: e.target.value })
            }
          />
          <Input
            type="text"
            icono={<BsEnvelopeFill />}
            placeholder="Código Dependencia"
            name="codigo_dependencia"
            value={formData.codigo_dependencia}
            valueChange={(e) =>
              setFormData({ ...formData, codigo_dependencia: e.target.value })
            }
          />
          <Input
            type="text"
            icono={<BsEnvelopeFill />}
            placeholder="Nombre Plantel"
            name="nombre_plantel"
            value={formData.nombre_plantel}
            valueChange={(e) =>
              setFormData({ ...formData, nombre_plantel: e.target.value })
            }
          />
          <Input
            type="text"
            icono={<BsEnvelopeFill />}
            placeholder="Dirección Institución"
            name="direccion_institucion"
            value={formData.direccion_institucion}
            valueChange={(e) =>
              setFormData({
                ...formData,
                direccion_institucion: e.target.value,
              })
            }
          />
          <Input
            type="text"
            icono={<BsEnvelopeFill />}
            placeholder="Nivel Modalidad"
            name="nivel_modalidad"
            value={formData.nivel_modalidad}
            valueChange={(e) =>
              setFormData({ ...formData, nivel_modalidad: e.target.value })
            }
          />
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
          <CheckboxBasic
            text="Inscrito en el PSUV"
            valueChange={(e: any) =>
              setFormData({ ...formData, inscrito_psuv: e.target.checked })
            }
          />
          <Input
            type="text"
            icono={<BsEnvelopeFill />}
            placeholder="Pertenece a Movimiento Social"
            name="pertenece_movimiento_social"
            value={formData.pertenece_movimiento_social}
            valueChange={(e) =>
              setFormData({
                ...formData,
                pertenece_movimiento_social: e.target.value,
              })
            }
          />
          <Input
            type="text"
            icono={<BsEnvelopeFill />}
            placeholder="Código del Carnet de la Patria"
            name="carnet_patria_codigo"
            value={formData.carnet_patria_codigo}
            valueChange={(e) =>
              setFormData({ ...formData, carnet_patria_codigo: e.target.value })
            }
          />
          <Input
            type="text"
            icono={<BsEnvelopeFill />}
            placeholder="Serial del Carnet de la Patria"
            name="carnet_patria_serial"
            value={formData.carnet_patria_serial}
            valueChange={(e) =>
              setFormData({ ...formData, carnet_patria_serial: e.target.value })
            }
          />
          <Input
            type="text"
            icono={<BsEnvelopeFill />}
            placeholder="Tipo de Voto"
            name="tipo_voto"
            value={formData.tipo_voto}
            valueChange={(e) =>
              setFormData({ ...formData, tipo_voto: e.target.value })
            }
          />
          <Input
            type="text"
            icono={<BsEnvelopeFill />}
            placeholder="Centro de Votación"
            name="centro_votacion"
            value={formData.centro_votacion}
            valueChange={(e) =>
              setFormData({ ...formData, centro_votacion: e.target.value })
            }
          />
          <Input
            type="text"
            icono={<BsEnvelopeFill />}
            placeholder="Observaciones"
            name="observaciones"
            value={formData.observaciones}
            valueChange={(e) =>
              setFormData({ ...formData, observaciones: e.target.value })
            }
          />
          <BtnSubmitBasic text="Agregar Cocinero" loading={false} />
        </form>
      </div>
    </LayoutForm>
  );
};

export default AddCocinero;
