import { Column, Entity, OneToMany } from "typeorm";
import { Doctorshift } from "./Doctorshift";
import { Medicalschedule } from "./Medicalschedule";

@Entity("medicalshift", { schema: "saludtotal" })
export class Medicalshift {
  @Column("int", { primary: true, name: "shift_id" })
  shiftId: number;

  @Column("varchar", { name: "shift_name", length: 25 })
  shiftName: string;

  @OneToMany(() => Doctorshift, (doctorshift) => doctorshift.medicalShift)
  doctorshifts: Doctorshift[];

  @OneToMany(() => Medicalschedule, (medicalschedule) => medicalschedule.shift)
  medicalschedules: Medicalschedule[];
}
