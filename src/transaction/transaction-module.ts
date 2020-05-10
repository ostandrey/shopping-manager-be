import { Module } from '@nestjs/common';
import { TransactionService } from './service/transaction-service';
import { TransactionController } from './controllers/transaction-controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './entity/transaction.entity';
import { TransactionCategory } from './entity/transaction-category.entity';
import { TransactionCategoryType } from './entity/transaction-type.entity';
import { TransactionCategoryController } from './controllers/transaction-category-controller';
import { TransactionCategoryService } from './service/transaction-category-service';



@Module({
  imports: [TypeOrmModule.forFeature([
    Transaction,
    TransactionCategory,
    TransactionCategoryType
  ])],
  controllers: [TransactionController, TransactionCategoryController],
  providers: [TransactionService, TransactionCategoryService],
})
export class TransactionModule {}
