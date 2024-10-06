import { SQL } from "sql-template-strings";

export const createEmpleadoTableQuery = SQL`
  CREATE TABLE IF NOT EXISTS empleado (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tipo_empleado TEXT NOT NULL,
    nombres TEXT,
    apellidos TEXT,
    ci NUMERIC UNIQUE,
    fecha_nacimiento DATE,
    telefono TEXT,
    correo_electronico TEXT,
    fecha_ingreso_mppe DATE,
    direccion_de_habitacion TEXT,
    codigo_cargo TEXT,
    dependencia_nominal TEXT,
    estatus BOOLEAN,
    reposo_permiso TEXT,
    anos_servicio FLOAT,
    observaciones TEXT

    -- SOLO DOCENTE
    titulo_pregrado TEXT default '',
    area_docente_especialista TEXT default '',
    grado_seccion TEXT default '',
    funcion_trabajo TEXT default '',

    -- SOLO OBRERO Y ADMINISTRATIVO
    acarigua TEXT default '',
    
    -- OBRERO, ADMINISTRATIVO Y COCINEROS
    titulo_obtenido TEXT default '',

    -- ANADIDO
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`;
