import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
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

  @UpdateDateColumn()
  updatedAt: string;

  @ManyToOne(type => User, user => user.rating)
  user: User;

  @OneToMany(type => Reward, rewards => rewards.rewardRating)
  rewards: Reward[];
}

export default Rating;
