import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Address } from "./Address";
import { Province } from "./Province";

@Index("Street_index_9", ["provinceId"], {})
@Entity("street", { schema: "saludtotal" })
export class Street {
  @Column("int", { primary: true, name: "street_id" })
  streetId: number;

  @Column("int", { name: "province_id" })
  provinceId: number;

  @Column("varchar", { name: "street_name", length: 55 })
  streetName: string;

  @OneToMany(() => Address, (address) => address.street)
  addresses: Address[];

  @ManyToOne(() => Province, (province) => province.streets, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "province_id", referencedColumnName: "provinceId" }])
  province: Province;
}
