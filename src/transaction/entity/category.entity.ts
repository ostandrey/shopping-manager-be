import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Transaction } from './transaction.entity';
import { CategoryName } from './category_name.entity';
import { TypeCategory } from './type_category.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  categoryNameId: number;


  @ManyToOne(type => CategoryName, categoryName => categoryName.category)
  @JoinColumn()
  categoryName: CategoryName[];

  @Column()
  type_id: number;

  @ManyToOne(type => TypeCategory, typeCategory => typeCategory.category)
  @JoinColumn({name: "type_id"})
  typeCategory: TypeCategory[];

  @OneToMany(type => Transaction, transaction => transaction.category)
  transaction: Transaction[];
}
