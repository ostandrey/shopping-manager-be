import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Transaction } from './transaction.entity';
import { TransactionCategoryType } from './transaction-type.entity';

@Entity()
export class TransactionCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(
    type => TransactionCategoryType,
      type => type.category)
  type: TransactionCategoryType;

  @OneToMany(type => Transaction, transaction => transaction.category)
  transaction: Transaction;
}
