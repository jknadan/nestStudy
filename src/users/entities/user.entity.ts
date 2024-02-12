import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('USER')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone?: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
