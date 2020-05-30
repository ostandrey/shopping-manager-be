import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Wallet } from '../../wallets/entity/wallet.entity';
import { TransactionCategory } from './transaction-category.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'decimal', precision: 12, scale: 2})
  amount: number;

  @Column('text')
  description: string;

  @Column('date')
  date: number;

  @ManyToOne(
    type => TransactionCategory,
      category => category.transaction, {cascade: ['insert', 'update']})
  category: TransactionCategory;

  @ManyToOne(type => Wallet, wallet => wallet.transaction,
    {onDelete: 'CASCADE'})
  wallet: Wallet;
}
