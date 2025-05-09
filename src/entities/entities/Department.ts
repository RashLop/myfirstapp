import { Column, Entity, OneToMany } from "typeorm";
import { Province } from "./Province";

@Entity("department", { schema: "saludtotal" })
export class Department {
  @Column("int", { primary: true, name: "department_id" })
  departmentId: number;

  @Column("varchar", { name: "department_name", length: 25 })
  departmentName: string;

  @OneToMany(() => Province, (province) => province.department)
  provinces: Province[];
}
