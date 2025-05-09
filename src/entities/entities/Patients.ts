import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from "typeorm";
import { Appointments } from "./Appointments";
import { Users } from "./Users";
import { Bloodtype } from "./Bloodtype";

@Index("Patients_index_3", ["bloodTypeId"], {})
@Entity("patients", { schema: "saludtotal" })
export class Patients {
  @Column("int", { primary: true, name: "patient_ci" })
  patientCi: number;

  @Column("int", { name: "blood_type_id" })
  bloodTypeId: number;

  @OneToMany(() => Appointments, (appointments) => appointments.patientCi2)
  appointments: Appointments[];

  @OneToOne(() => Users, (users) => users.patients, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "patient_ci", referencedColumnName: "userCi" }])
  patientCi2: Users;

  @ManyToOne(() => Bloodtype, (bloodtype) => bloodtype.patients, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "blood_type_id", referencedColumnName: "bloodTypeId" }])
  bloodType: Bloodtype;
}
