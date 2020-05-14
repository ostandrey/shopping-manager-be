import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Transaction } from '../../transaction/entity/transaction.entity';
import { Wallet } from '../../wallets/entity/wallet.entity';


@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToMany(
    type => Wallet,
    wallet => wallet.user
  )
  wallet: Wallet[];

}
