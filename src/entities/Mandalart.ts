import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import User from './User';

@Entity()
class Mandalart extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text', array: true, nullable: true })
  content: string[];

  @ManyToOne(type => User, user => user.mandalarts)
  user: User;

  @Column({type: 'date'})
  startDate: Date

  @Column({type: 'date'})
  endDate: Date

  @CreateDateColumn() createdAt: string;

  @UpdateDateColumn() updatedAt: string;
}

export default Mandalart;
