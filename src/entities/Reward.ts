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
  ratingId: number;

  @ManyToOne(type => Rating, rating => rating.rewards)
  rating: Rating;

  @Column({ type: "text", nullable: true })
  message: string | null;

  @CreateDateColumn()
  createdAt: string;
}

export default Reward;
