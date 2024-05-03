import {
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

export class BaseEntity {
  @CreateDateColumn({ type: 'timestamp' })
  created_date?: Date;

  @Column({ nullable: true })
  created_by?: string;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_date?: Date;

  @Column({ nullable: true })
  updated_by?: string;
}
