import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import { Consultation } from "./Consultation";
import { Users } from "./Users";

@Index("MedicalHistory_index_22", ["consultationId"], {})
@Entity("medicalhistory", { schema: "saludtotal" })
export class Medicalhistory {
  @Column("int", { primary: true, name: "medical_history_id" })
  medicalHistoryId: number;

  @Column("int", { name: "consultation_id" })
  consultationId: number;

  @ManyToOne(
    () => Consultation,
    (consultation) => consultation.medicalhistories,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "consultation_id", referencedColumnName: "consultationId" },
  ])
  consultation: Consultation;

  @ManyToMany(() => Users, (users) => users.medicalhistories)
  @JoinTable({
    name: "usermedicalhistory",
    joinColumns: [
      { name: "medical_history_id", referencedColumnName: "medicalHistoryId" },
    ],
    inverseJoinColumns: [{ name: "user_ci", referencedColumnName: "userCi" }],
    schema: "saludtotal",
  })
  users: Users[];
}
