import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
} from "typeorm";
import { Doctors } from "./Doctors";
import { Healthcareinstitution } from "./Healthcareinstitution";
import { Patients } from "./Patients";
import { Useraddressing } from "./Useraddressing";
import { Medicalhistory } from "./Medicalhistory";
import { Userparentalsupervisor } from "./Userparentalsupervisor";
import { Role } from "./Role";

@Index("idx_users_email", ["userEmail"], {})
@Index("user_email", ["userEmail"], { unique: true })
@Index("user_name", ["userName"], { unique: true })
@Index("Users_index_0", ["userEmail"], {})
@Index("Users_index_1", ["burnDate"], {})
@Index("Users_index_2", ["phone"], {})
@Entity("users", { schema: "saludtotal" })
export class Users {
  @Column("int", { primary: true, name: "user_ci" })
  userCi: number;

  @Column("varchar", {
    name: "user_name",
    nullable: true,
    unique: true,
    length: 25,
  })
  userName: string | null;

  @Column("varchar", { name: "user_email", unique: true, length: 100 })
  userEmail: string;

  @Column("varchar", { name: "user_password", length: 60 })
  userPassword: string;

  @Column("varchar", { name: "name", length: 25 })
  name: string;

  @Column("varchar", { name: "last_name", length: 25 })
  lastName: string;

  @Column("date", { name: "burn_date" })
  burnDate: string;

  @Column("varchar", { name: "phone", nullable: true, length: 12 })
  phone: string | null;

  @OneToOne(() => Doctors, (doctors) => doctors.doctorCi2)
  doctors: Doctors;

  @ManyToMany(
    () => Healthcareinstitution,
    (healthcareinstitution) => healthcareinstitution.users
  )
  @JoinTable({
    name: "institutionadmin",
    joinColumns: [{ name: "user_ci", referencedColumnName: "userCi" }],
    inverseJoinColumns: [
      { name: "institution_id", referencedColumnName: "institutionId" },
    ],
    schema: "saludtotal",
  })
  healthcareinstitutions: Healthcareinstitution[];

  @OneToOne(() => Patients, (patients) => patients.patientCi2)
  patients: Patients;

  @OneToMany(() => Useraddressing, (useraddressing) => useraddressing.userCi2)
  useraddressings: Useraddressing[];

  @ManyToMany(() => Medicalhistory, (medicalhistory) => medicalhistory.users)
  medicalhistories: Medicalhistory[];

  @OneToMany(
    () => Userparentalsupervisor,
    (userparentalsupervisor) => userparentalsupervisor.supervisorUserCi2
  )
  userparentalsupervisors: Userparentalsupervisor[];

  @OneToMany(
    () => Userparentalsupervisor,
    (userparentalsupervisor) => userparentalsupervisor.userCi2
  )
  userparentalsupervisors2: Userparentalsupervisor[];

  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable({
    name: "usersrole",
    joinColumns: [{ name: "user_ci", referencedColumnName: "userCi" }],
    inverseJoinColumns: [{ name: "role_id", referencedColumnName: "roleId" }],
    schema: "saludtotal",
  })
  roles: Role[];
}
