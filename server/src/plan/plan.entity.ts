import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Plan extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  start_date: Date;

  @Column()
  due_date: Date;

  @Column()
  completed: boolean;

  @Column()
  completed_at: Date;

  @Column()
  priority: number;

  @Column()
  user_id: number;
}
