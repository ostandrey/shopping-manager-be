import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, JoinTable } from 'typeorm';
import { Type } from './type.entity';
import { Transaction } from '../../transaction/entity/transaction.entity';

@Entity()
export class Wallet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(type => Type, type => type.wallet)
  @JoinColumn({name: "typeId", referencedColumnName: "id"})
  type: Type;

  @ManyToOne(type => Transaction, transaction => transaction.wallet)
  @JoinColumn({name: "transaction_id", referencedColumnName: "id"})
  transaction: Transaction[];


  @Column()
  balance: number;


}
