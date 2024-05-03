import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { uuidv7 } from "uuidv7";
import { BaseEntity } from "./base.entity";

@Entity({ name: "product" })
export class ProductEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  p_id: string;

  @Column({ nullable: true })
  p_name: string;

  @BeforeInsert()
  generateUUID() {
    this.p_id = uuidv7();
  }
}
