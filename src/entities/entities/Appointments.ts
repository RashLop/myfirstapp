import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Healthcareinstitution } from "./Healthcareinstitution";
import { Patients } from "./Patients";
import { State } from "./State";
import { Medicalschedule } from "./Medicalschedule";
import { Doctors } from "./Doctors";
import { Speciality } from "./Speciality";
import { Consultation } from "./Consultation";

@Index("Appointments_index_14", ["institutionId"], {})
@Index("Appointments_index_15", ["patientCi"], {})
@Index("Appointments_index_16", ["doctorCi"], {})
@Index("Appointments_index_17", ["stateId"], {})
@Index("Appointments_index_18", ["scheduleId"], {})
@Index("Appointments_index_19", ["specialityId"], {})
@Index("Appointments_index_20", ["doctorCi", "appointmentDate"], {})
@Entity("appointments", { schema: "saludtotal" })
export class Appointments {
  @Column("int", { primary: true, name: "appointment_id" })
  appointmentId: number;

  @Column("int", { name: "institution_id" })
  institutionId: number;

  @Column("int", { name: "speciality_id" })
  specialityId: number;

  @Column("int", { name: "patient_ci" })
  patientCi: number;

  @Column("int", { name: "doctor_ci" })
  doctorCi: number;

  @Column("date", { name: "appointment_date" })
  appointmentDate: string;

  @Column("int", { name: "schedule_id" })
  scheduleId: number;

  @Column("int", { name: "state_id" })
  stateId: number;

  @ManyToOne(
    () => Healthcareinstitution,
    (healthcareinstitution) => healthcareinstitution.appointments,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "institution_id", referencedColumnName: "institutionId" },
  ])
  institution: Healthcareinstitution;

  @ManyToOne(() => Patients, (patients) => patients.appointments, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "patient_ci", referencedColumnName: "patientCi" }])
  patientCi2: Patients;

  @ManyToOne(() => State, (state) => state.appointments, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "state_id", referencedColumnName: "stateId" }])
  state: State;

  @ManyToOne(
    () => Medicalschedule,
    (medicalschedule) => medicalschedule.appointments,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "schedule_id", referencedColumnName: "scheduleId" }])
  schedule: Medicalschedule;

  @ManyToOne(() => Doctors, (doctors) => doctors.appointments, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "doctor_ci", referencedColumnName: "doctorCi" }])
  doctorCi2: Doctors;

  @ManyToOne(() => Speciality, (speciality) => speciality.appointments, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "speciality_id", referencedColumnName: "specialityId" }])
  speciality: Speciality;

  @OneToMany(() => Consultation, (consultation) => consultation.appointment)
  consultations: Consultation[];
}
