import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { Appointments } from "./Appointments";
import { Users } from "./Users";
import { Specialists } from "./Specialists";

@Entity("doctors", { schema: "saludtotal" })
export class Doctors {
  @Column("int", { primary: true, name: "doctor_ci" })
  doctorCi: number;

  @Column("int", { name: "years_of_experience" })
  yearsOfExperience: number;

  @OneToMany(() => Appointments, (appointments) => appointments.doctorCi2)
  appointments: Appointments[];

  @OneToOne(() => Users, (users) => users.doctors, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "doctor_ci", referencedColumnName: "userCi" }])
  doctorCi2: Users;

  @OneToMany(() => Specialists, (specialists) => specialists.doctorCi2)
  specialists: Specialists[];
}
