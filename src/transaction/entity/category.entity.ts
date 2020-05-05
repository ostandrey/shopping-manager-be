import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Transaction } from './transaction.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name_category: string;

  @OneToMany(type => Transaction, transaction => transaction.category)
  transaction: Transaction;
}
