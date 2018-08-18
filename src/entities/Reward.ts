import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";


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

  @CreateDateColumn()
  createdAt: string;
}

export default Reward;
