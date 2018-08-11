import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne
} from "typeorm";

import Rating from "./Rating";

@Entity()
class Reward extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  score: number;

  @Column({ type: "int" })
  targetId: number;

  @ManyToOne(type => Rating, rewardRating => rewardRating.rewards)
  rewardRating: Rating;

  @Column({ type: "text" })
  message: string;

  @CreateDateColumn()
  createdAt: string;
}

export default Reward;
