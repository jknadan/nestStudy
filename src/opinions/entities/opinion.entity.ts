import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Opinions')
export class Opinion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  contents: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
