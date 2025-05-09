import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Typeofsupervision } from "./Typeofsupervision";
import { Users } from "./Users";

@Index("relationship_type_id", ["relationshipTypeId"], {})
@Index("user_ci", ["userCi"], {})
@Index(
  "UserParentalSupervisor_index_24",
  ["supervisorUserCi", "userCi", "relationshipTypeId", "isActive"],
  {}
)
@Entity("userparentalsupervisor", { schema: "saludtotal" })
export class Userparentalsupervisor {
  @Column("int", { primary: true, name: "supervisor_user_ci" })
  supervisorUserCi: number;

  @Column("int", { primary: true, name: "user_ci" })
  userCi: number;

  @Column("int", { primary: true, name: "relationship_type_id" })
  relationshipTypeId: number;

  @Column("tinyint", { name: "is_active", width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column("date", { name: "start_date" })
  startDate: string;

  @Column("date", { name: "end_date", nullable: true })
  endDate: string | null;

  @ManyToOne(
    () => Typeofsupervision,
    (typeofsupervision) => typeofsupervision.userparentalsupervisors,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    {
      name: "relationship_type_id",
      referencedColumnName: "typeOfSupervisionId",
    },
  ])
  relationshipType: Typeofsupervision;

  @ManyToOne(() => Users, (users) => users.userparentalsupervisors, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "supervisor_user_ci", referencedColumnName: "userCi" }])
  supervisorUserCi2: Users;

  @ManyToOne(() => Users, (users) => users.userparentalsupervisors2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "user_ci", referencedColumnName: "userCi" }])
  userCi2: Users;
}
