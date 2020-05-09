import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TransactionCategory } from './transaction-category.entity';

@Entity()
export class TransactionCategoryType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => TransactionCategory, category => category.type)
  category: TransactionCategory;
}
