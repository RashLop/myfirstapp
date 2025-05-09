import { Column, Entity, OneToMany } from "typeorm";
import { Appointments } from "./Appointments";

@Entity("state", { schema: "saludtotal" })
export class State {
  @Column("int", { primary: true, name: "state_id" })
  stateId: number;

  @Column("varchar", { name: "state_name", nullable: true, length: 25 })
  stateName: string | null;

  @OneToMany(() => Appointments, (appointments) => appointments.state)
  appointments: Appointments[];
}
