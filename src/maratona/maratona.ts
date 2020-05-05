import {
  Entity,
  Column,
  PrimaryGeneratedColumn
} from "typeorm";

@Entity({name: 'Maratona'})
export class Maratona {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;
}
