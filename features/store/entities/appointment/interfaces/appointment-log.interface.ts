

export interface IAppointmentLogEntry {
  id: string;
  patientId: string;
  // type: EAppointmentType;
  // status: EAppointmentLogStatus;
  date: Date;
  time: string;
  // treatment?: TTreatment;
  photos?: string[];
  aiAssistantUsed?: boolean;
  note?: string;
}
