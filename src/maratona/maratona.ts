import {
  Entity,
  Column,
  PrimaryGeneratedColumn
} from "typeorm";

@Entity({name: 'maratonas'})
export class Maratona {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  aula: string;
}
