import bcrypt from 'bcrypt';
import { IsEmail } from 'class-validator';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
  OneToOne,
} from 'typeorm';
import Mandalart from './Mandalart';
import Todo from './Todo';
import SubTodo from './SubTodo';
import Rating from './Rating';

const BCRYPT_ROUNDS = 10;

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: true })
  @IsEmail()
  email: string | null;

  @Column({ type: 'text' })
  firstName: string;

  @Column({ type: 'text' })
  lastName: string;

  @Column({ type: 'int', nullable: true })
  age: number | null;

  @Column({ type: 'text', nullable: true })
  password: string;

  @Column({ type: 'text', nullable: true })
  profileImage: string | null;

  @CreateDateColumn()
  createdAt;

  @UpdateDateColumn()
  updatedAt;

  @Column({ type: 'text', nullable: true })
  fbId: string;

  @OneToMany(type => Mandalart, mandalart => mandalart.user, { nullable: true })
  mandalarts: Mandalart[] | null;

  @OneToMany(type => Todo, todo => todo.user)
  todos: Todo[];

  @OneToMany(type => SubTodo, subTodo => subTodo.user)
  subTodos: SubTodo[];

  @OneToOne(type => Rating, rating => rating.user)
  rating: Rating;

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public comparePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }

  @BeforeInsert()
  @BeforeUpdate()
  async savePassword(): Promise<void> {
    if (this.password) {
      const hashedPassword = await this.hashPassword(this.password);
      this.password = hashedPassword;
    }
  }

  private hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, BCRYPT_ROUNDS);
  }
}

export default User;
