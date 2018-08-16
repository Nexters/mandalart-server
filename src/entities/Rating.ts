import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
  ManyToOne
} from "typeorm";

import User from "./User";
import Reward from "./Reward";

@Entity()
class Rating extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  tier: number;

  @Column({ type: "text" })
  tierImage: string;

  @Column({ type: "int" })
  totalScore: number;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @Column({ nullable: true })
  userId: number;

  @ManyToOne(type => User, user => user.rating)
  user: User;

  @OneToMany(type => Reward, rewards => rewards.rating, {
    nullable: true
  })
  rewards: Reward[] | null;
}

export default Rating;
