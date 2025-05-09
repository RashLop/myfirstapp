import { Column, Entity, OneToMany } from "typeorm";
import { Healthcareinstitution } from "./Healthcareinstitution";

@Entity("servicetype", { schema: "saludtotal" })
export class Servicetype {
  @Column("int", { primary: true, name: "service_type_id" })
  serviceTypeId: number;

  @Column("varchar", { name: "service_type", length: 25 })
  serviceType: string;

  @OneToMany(
    () => Healthcareinstitution,
    (healthcareinstitution) => healthcareinstitution.serviceType
  )
  healthcareinstitutions: Healthcareinstitution[];
}
