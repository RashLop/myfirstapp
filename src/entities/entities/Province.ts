import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Department } from "./Department";
import { Street } from "./Street";

@Index("Province_index_8", ["departmentId"], {})
@Entity("province", { schema: "saludtotal" })
export class Province {
  @Column("int", { primary: true, name: "province_id" })
  provinceId: number;

  @Column("int", { name: "department_id" })
  departmentId: number;

  @Column("varchar", { name: "province_name", length: 25 })
  provinceName: string;

  @ManyToOne(() => Department, (department) => department.provinces, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  department: Department;

  @OneToMany(() => Street, (street) => street.province)
  streets: Street[];
}
