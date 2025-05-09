import { Column, Entity, Index, OneToMany } from "typeorm";
import { Patients } from "./Patients";

@Index("BloodType_index_4", ["bloodType"], {})
@Entity("bloodtype", { schema: "saludtotal" })
export class Bloodtype {
  @Column("int", { primary: true, name: "blood_type_id" })
  bloodTypeId: number;

  @Column("varchar", { name: "blood_type", length: 5 })
  bloodType: string;

  @OneToMany(() => Patients, (patients) => patients.bloodType)
  patients: Patients[];
}
