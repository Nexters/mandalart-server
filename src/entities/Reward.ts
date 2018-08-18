import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";

import Mandalart from './Mandalart';

@Entity()
class Reward extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Mandalart, mandalart => mandalart.todos)
  mandalart: Mandalart;

  @Column({ type: "text" })
  message: string;

  @Column({ type: "int" })
  percentage: number;

  @CreateDateColumn()
  createdAt: string;
}

export default Reward;
