import { IsEmail } from 'class-validator';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: 'text', unique: true })
  @IsEmail()
  email: string;

  @Column({ type: 'text' })
  firstName: string;

  @Column({ type: 'text' })
  lastName: string;

  @Column({ type: 'int' })
  age: number;

  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'text' })
  profileImage: string;

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  @CreateDateColumn() createdAt;

  @UpdateDateColumn() updatedAt;
}

export default User;
