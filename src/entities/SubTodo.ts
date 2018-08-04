import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

import Mandalart from './Mandalart';
import User from './User';
import Todo from './Todo';

@Entity()
class SubTodo extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: 'text' })
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'boolean', default: false })
  isAchieved: boolean;

  @ManyToOne(type => User, user => user.todos)
  user: User;

  @ManyToOne(type => Mandalart, mandalart => mandalart.todos)
  mandalart: Mandalart;

  @ManyToOne(type => Todo, todo => todo.subTodos)
  todo: Todo;

  @CreateDateColumn() createdAt: string;

  @UpdateDateColumn() updatedAt: string;
}

export default SubTodo;
