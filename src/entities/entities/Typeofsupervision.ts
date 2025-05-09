import { Column, Entity, OneToMany } from "typeorm";
import { Userparentalsupervisor } from "./Userparentalsupervisor";

@Entity("typeofsupervision", { schema: "saludtotal" })
export class Typeofsupervision {
  @Column("int", { primary: true, name: "type_of_supervision_id" })
  typeOfSupervisionId: number;

  @Column("varchar", {
    name: "type_of_supervision",
    nullable: true,
    length: 25,
  })
  typeOfSupervision: string | null;

  @OneToMany(
    () => Userparentalsupervisor,
    (userparentalsupervisor) => userparentalsupervisor.relationshipType
  )
  userparentalsupervisors: Userparentalsupervisor[];
}
