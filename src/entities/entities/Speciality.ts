import { Column, Entity, OneToMany } from "typeorm";
import { Appointments } from "./Appointments";
import { Specialists } from "./Specialists";

@Entity("speciality", { schema: "saludtotal" })
export class Speciality {
  @Column("int", { primary: true, name: "speciality_id" })
  specialityId: number;

  @Column("varchar", { name: "speciality_name", nullable: true, length: 25 })
  specialityName: string | null;

  @OneToMany(() => Appointments, (appointments) => appointments.speciality)
  appointments: Appointments[];

  @OneToMany(() => Specialists, (specialists) => specialists.speciality)
  specialists: Specialists[];
}
