import { Column, Entity, OneToMany } from "typeorm";
import { Doctorshift } from "./Doctorshift";
import { Medicalschedule } from "./Medicalschedule";

@Entity("medicalservice", { schema: "saludtotal" })
export class Medicalservice {
  @Column("int", { primary: true, name: "medical_service_id" })
  medicalServiceId: number;

  @Column("varchar", { name: "medical_service", nullable: true, length: 25 })
  medicalService: string | null;

  @OneToMany(() => Doctorshift, (doctorshift) => doctorshift.medicalService)
  doctorshifts: Doctorshift[];

  @OneToMany(
    () => Medicalschedule,
    (medicalschedule) => medicalschedule.medicalService
  )
  medicalschedules: Medicalschedule[];
}
