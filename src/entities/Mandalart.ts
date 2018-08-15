import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import User from './User';
import Todo from './Todo';

@Entity()
class Mandalart extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'int', nullable: true })
  achievementRate: number | null;

  @Column({ nullable: true })
  userId: number;

  @ManyToOne(type => User, user => user.mandalarts)
  user: User;

  @OneToMany(type => Todo, todo => todo.mandalart, { nullable: true })
  todos: Todo[] | null;

  @Column({ type: 'text' })
  startDate: string;

  @Column({ type: 'text' })
  endDate: string;

  @Column({ type: 'text', nullable: true })
  goal: string | null;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}

export default Mandalart;
