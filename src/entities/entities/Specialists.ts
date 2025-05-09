import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Medicalschedule } from "./Medicalschedule";
import { Doctorshift } from "./Doctorshift";
import { Doctors } from "./Doctors";
import { Speciality } from "./Speciality";

@Index("speciality_id", ["specialityId"], {})
@Entity("specialists", { schema: "saludtotal" })
export class Specialists {
  @Column("int", { primary: true, name: "doctor_ci" })
  doctorCi: number;

  @Column("int", { primary: true, name: "speciality_id" })
  specialityId: number;

  @ManyToMany(
    () => Medicalschedule,
    (medicalschedule) => medicalschedule.specialists
  )
  medicalschedules: Medicalschedule[];

  @OneToMany(() => Doctorshift, (doctorshift) => doctorshift.specialist)
  doctorshifts: Doctorshift[];

  @ManyToOne(() => Doctors, (doctors) => doctors.specialists, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "doctor_ci", referencedColumnName: "doctorCi" }])
  doctorCi2: Doctors;

  @ManyToOne(() => Speciality, (speciality) => speciality.specialists, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "speciality_id", referencedColumnName: "specialityId" }])
  speciality: Speciality;
}
