import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Appointments } from "./Appointments";
import { Structuretype } from "./Structuretype";
import { Servicetype } from "./Servicetype";
import { Address } from "./Address";
import { Users } from "./Users";

@Index("HealthcareInstitution_index_5", ["structureTypeId"], {})
@Index("HealthcareInstitution_index_6", ["serviceTypeId"], {})
@Index("HealthcareInstitution_index_7", ["institutionName"], {})
@Entity("healthcareinstitution", { schema: "saludtotal" })
export class Healthcareinstitution {
  @Column("int", { primary: true, name: "institution_id" })
  institutionId: number;

  @Column("int", { name: "structure_type_id" })
  structureTypeId: number;

  @Column("varchar", { name: "institution_name", length: 40 })
  institutionName: string;

  @Column("date", { name: "foundation_date" })
  foundationDate: string;

  @Column("int", { name: "service_type_id" })
  serviceTypeId: number;

  @OneToMany(() => Appointments, (appointments) => appointments.institution)
  appointments: Appointments[];

  @ManyToOne(
    () => Structuretype,
    (structuretype) => structuretype.healthcareinstitutions,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "structure_type_id", referencedColumnName: "structureTypeId" },
  ])
  structureType: Structuretype;

  @ManyToOne(
    () => Servicetype,
    (servicetype) => servicetype.healthcareinstitutions,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "service_type_id", referencedColumnName: "serviceTypeId" },
  ])
  serviceType: Servicetype;

  @ManyToMany(() => Address, (address) => address.healthcareinstitutions)
  addresses: Address[];

  @ManyToMany(() => Users, (users) => users.healthcareinstitutions)
  users: Users[];
}
