import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Wallet } from '../../wallets/entity/wallet.entity';
import { Category } from './category.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column('text')
  description: string;

  @Column('date')
  date: number;

  @ManyToOne(type => Category, category => category.transaction)
  @JoinColumn({name: "category_id"})
  category: Category[];

  @OneToMany(type => Wallet, wallet => wallet.transaction)
  wallet: Wallet;
}
