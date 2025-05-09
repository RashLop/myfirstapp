import { Column, Entity, OneToMany } from "typeorm";
import { Healthcareinstitution } from "./Healthcareinstitution";

@Entity("structuretype", { schema: "saludtotal" })
export class Structuretype {
  @Column("int", { primary: true, name: "structure_type_id" })
  structureTypeId: number;

  @Column("varchar", { name: "structure_type_name", length: 15 })
  structureTypeName: string;

  @OneToMany(
    () => Healthcareinstitution,
    (healthcareinstitution) => healthcareinstitution.structureType
  )
  healthcareinstitutions: Healthcareinstitution[];
}
