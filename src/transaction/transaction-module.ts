import { Module } from '@nestjs/common';
import { TransactionService } from './service/transaction-service';
import { TransactionController } from './controllers/transaction-controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './entity/transaction.entity';
import { Category } from './entity/category.entity';
import { CategoryName } from './entity/category_name.entity';
import { TypeCategory } from './entity/type_category.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Transaction, Category, CategoryName, TypeCategory])],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}
