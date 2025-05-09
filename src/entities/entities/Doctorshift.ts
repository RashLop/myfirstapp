import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Medicalservice } from "./Medicalservice";
import { Medicalshift } from "./Medicalshift";
import { Specialists } from "./Specialists";

@Index(
  "DoctorShift_index_13",
  ["specialistId", "medicalServiceId", "shiftDate"],
  {}
)
@Index("medical_service_id", ["medicalServiceId"], {})
@Index("medical_shift_id", ["medicalShiftId"], {})
@Entity("doctorshift", { schema: "saludtotal" })
export class Doctorshift {
  @Column("int", { primary: true, name: "specialist_id" })
  specialistId: number;

  @Column("int", { primary: true, name: "medical_shift_id" })
  medicalShiftId: number;

  @Column("int", { primary: true, name: "medical_service_id" })
  medicalServiceId: number;

  @Column("date", { primary: true, name: "shift_date" })
  shiftDate: string;

  @ManyToOne(
    () => Medicalservice,
    (medicalservice) => medicalservice.doctorshifts,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "medical_service_id", referencedColumnName: "medicalServiceId" },
  ])
  medicalService: Medicalservice;

  @ManyToOne(() => Medicalshift, (medicalshift) => medicalshift.doctorshifts, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "medical_shift_id", referencedColumnName: "shiftId" }])
  medicalShift: Medicalshift;

  @ManyToOne(() => Specialists, (specialists) => specialists.doctorshifts, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "specialist_id", referencedColumnName: "doctorCi" }])
  specialist: Specialists;
}
