import { Column, Entity, ManyToMany } from "typeorm";
import { Users } from "./Users";

@Entity("role", { schema: "saludtotal" })
export class Role {
  @Column("int", { primary: true, name: "role_id" })
  roleId: number;

  @Column("varchar", { name: "role_name", nullable: true, length: 25 })
  roleName: string | null;

  @ManyToMany(() => Users, (users) => users.roles)
  users: Users[];
}
