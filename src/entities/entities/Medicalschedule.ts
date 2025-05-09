import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Appointments } from "./Appointments";
import { Specialists } from "./Specialists";
import { Medicalservice } from "./Medicalservice";
import { Medicalshift } from "./Medicalshift";

@Index("medical_service_id", ["medicalServiceId"], {})
@Index("MedicalSchedule_index_12", ["shiftId", "medicalServiceId"], {})
@Entity("medicalschedule", { schema: "saludtotal" })
export class Medicalschedule {
  @Column("int", { primary: true, name: "schedule_id" })
  scheduleId: number;

  @Column("int", { name: "shift_id" })
  shiftId: number;

  @Column("int", { name: "medical_service_id" })
  medicalServiceId: number;

  @Column("time", { name: "start_time" })
  startTime: string;

  @Column("time", { name: "end_time" })
  endTime: string;

  @OneToMany(() => Appointments, (appointments) => appointments.schedule)
  appointments: Appointments[];

  @ManyToMany(() => Specialists, (specialists) => specialists.medicalschedules)
  @JoinTable({
    name: "doctorschedule",
    joinColumns: [{ name: "schedule_id", referencedColumnName: "scheduleId" }],
    inverseJoinColumns: [
      { name: "specialist_id", referencedColumnName: "doctorCi" },
    ],
    schema: "saludtotal",
  })
  specialists: Specialists[];

  @ManyToOne(
    () => Medicalservice,
    (medicalservice) => medicalservice.medicalschedules,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "medical_service_id", referencedColumnName: "medicalServiceId" },
  ])
  medicalService: Medicalservice;

  @ManyToOne(
    () => Medicalshift,
    (medicalshift) => medicalshift.medicalschedules,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "shift_id", referencedColumnName: "shiftId" }])
  shift: Medicalshift;
}
