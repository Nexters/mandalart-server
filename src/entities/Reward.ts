import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Mandalart from "./Mandalart";


@Entity()
class Reward extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  mandalartId: number;

  @Column({ type: "text" })
  message: string;

  @Column({ type: "int" })
  percentage: number;

  @ManyToOne(type => Mandalart, mandalart => mandalart.rewards)
  mandalart: Mandalart;

  @CreateDateColumn()
  createdAt: string;
}

export default Reward;
