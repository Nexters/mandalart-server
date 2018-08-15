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
import Todo from './Todo';

@Entity()
class SubTodo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  todoId: number;

  @Column({ nullable: true })
  userId: number;

  @Column({ type: 'text' })
  title: string;

  @Column({ type: 'text' })
  startDate: string;

  @Column({ type: 'text' })
  endDate: string;

  @Column({ type: 'text', array: true, nullable: true })
  comments: string[] | null;

  @Column({ type: 'boolean', default: false })
  isAchieved: boolean;

  @ManyToOne(type => User, user => user.todos)
  user: User;

  @ManyToOne(type => Todo, todo => todo.subTodos)
  todo: Todo;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}

export default SubTodo;
