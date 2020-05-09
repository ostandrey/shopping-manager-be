import { Module } from '@nestjs/common';
import { TransactionService } from './service/transaction-service';
import { TransactionController } from './controllers/transaction-controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './entity/transaction.entity';
import { TransactionCategory } from './entity/transaction-category.entity';
import { TransactionCategoryType } from './entity/transaction-type.entity';



@Module({
  imports: [TypeOrmModule.forFeature([
    Transaction,
    TransactionCategory,
    TransactionCategoryType
  ])],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}
