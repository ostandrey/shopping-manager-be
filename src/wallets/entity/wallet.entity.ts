import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, JoinTable, OneToMany } from 'typeorm';
import { WalletType } from './wallet-type.entity';
import { Transaction } from '../../transaction/entity/transaction.entity';
import { Users } from '../../users/entity/users.entity';

@Entity()
export class Wallet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(type => WalletType, type => type.wallet)
  type: WalletType;

  @OneToMany(
    type => Transaction,
      transaction => transaction.wallet
  )
  transaction: Transaction[];

  @Column()
  balance: number;

  @ManyToOne(type => Users, user => user.wallet)
  user: Users;

}
