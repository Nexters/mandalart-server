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
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: 'text' })
  name: string;

  @ManyToOne(type => User, user => user.mandalarts)
  user: User;

  @OneToMany(type => Todo, todo => todo.mandalart)
  todos: Todo[];

  @Column({ type: 'date' })
  startDate: Date;

  @Column({ type: 'date' })
  endDate: Date;

  @CreateDateColumn() createdAt: string;

  @UpdateDateColumn() updatedAt: string;
}

export default Mandalart;
