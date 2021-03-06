import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { WalletType } from './wallet-type.entity';
import { Transaction } from '../../transaction/entity/transaction.entity';
import { Users } from '../../users/entity/users.entity';

@Entity()
export class Wallet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(
    type => WalletType,
    type => type.wallet,
    {cascade: ['insert', 'update']})
  type: WalletType;

  @OneToMany(
    type => Transaction,
      transaction => transaction.wallet
  )
  transaction: Transaction[];

  @Column({ type: 'decimal', precision: 12, scale: 2})
  balance: number;

  @ManyToOne(type => Users,
      user => user.wallet,
    {cascade: ['insert', 'update']})
  user: Users;

}
