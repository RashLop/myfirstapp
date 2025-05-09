import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Users } from "./Users";
import { Address } from "./Address";

@Index("address_id", ["addressId"], {})
@Entity("useraddressing", { schema: "saludtotal" })
export class Useraddressing {
  @Column("int", { primary: true, name: "user_ci" })
  userCi: number;

  @Column("int", { primary: true, name: "address_id" })
  addressId: number;

  @Column("date", { name: "actual_date" })
  actualDate: string;

  @ManyToOne(() => Users, (users) => users.useraddressings, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "user_ci", referencedColumnName: "userCi" }])
  userCi2: Users;

  @ManyToOne(() => Address, (address) => address.useraddressings, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "address_id", referencedColumnName: "addressId" }])
  address: Address;
}
