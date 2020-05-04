import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Type } from './type.entity';

@Entity()
export class Wallet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(type => Type, type => type.wallet)
  @JoinColumn({name: "typeId", referencedColumnName: "id"})
  type: Type;
}
