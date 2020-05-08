import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class CategoryName {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name_category: string;

  @OneToMany(type => Category, category => category.categoryName)
  category: Category;
}
