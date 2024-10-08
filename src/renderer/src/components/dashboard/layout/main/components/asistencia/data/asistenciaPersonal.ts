interface AsistenciaPersonal {
  id: number;
  personal_id: number;
  nombres: string;
  apellidos: string;
  ci: string;
  fecha: string;
  hora_entrada?: string;
  vino?: boolean;
}

const asistenciaPersonal: AsistenciaPersonal[] = [];

export { asistenciaPersonal };
export type { AsistenciaPersonal };
