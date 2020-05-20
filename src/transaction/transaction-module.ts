import { Module } from '@nestjs/common';
import { TransactionService } from './service/transaction-service';
import { TransactionController } from './controllers/transaction-controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './entity/transaction.entity';
import { TransactionCategory } from './entity/transaction-category.entity';
import { TransactionCategoryType } from './entity/transaction-type.entity';
import { TransactionCategoryController } from './controllers/transaction-category-controller';
import { TransactionCategoryService } from './service/transaction-category-service';
import { TransactionCategoryTypesController } from './controllers/transaction-category-types.controller';
import { TransactionCategoryTypesService } from './service/transaction-category-types.service';



@Module({
  imports: [TypeOrmModule.forFeature([
    Transaction,
    TransactionCategory,
    TransactionCategoryType
  ])],
  controllers: [
    TransactionController,
    TransactionCategoryController,
    TransactionCategoryTypesController
  ],
  providers: [
    TransactionService,
    TransactionCategoryService,
    TransactionCategoryTypesService
  ],
})
export class TransactionModule {}
