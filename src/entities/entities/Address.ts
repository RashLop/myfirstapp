import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Street } from "./Street";
import { Healthcareinstitution } from "./Healthcareinstitution";
import { Useraddressing } from "./Useraddressing";

@Index("Address_index_10", ["streetId"], {})
@Entity("address", { schema: "saludtotal" })
export class Address {
  @Column("int", { primary: true, name: "address_id" })
  addressId: number;

  @Column("int", { name: "street_id" })
  streetId: number;

  @Column("varchar", { name: "details", nullable: true, length: 35 })
  details: string | null;

  @ManyToOne(() => Street, (street) => street.addresses, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "street_id", referencedColumnName: "streetId" }])
  street: Street;

  @ManyToMany(
    () => Healthcareinstitution,
    (healthcareinstitution) => healthcareinstitution.addresses
  )
  @JoinTable({
    name: "institutionaddressing",
    joinColumns: [{ name: "address_id", referencedColumnName: "addressId" }],
    inverseJoinColumns: [
      { name: "institution_id", referencedColumnName: "institutionId" },
    ],
    schema: "saludtotal",
  })
  healthcareinstitutions: Healthcareinstitution[];

  @OneToMany(() => Useraddressing, (useraddressing) => useraddressing.address)
  useraddressings: Useraddressing[];
}
