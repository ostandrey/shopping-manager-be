import { Module } from '@nestjs/common';
import { TransactionService } from './service/transaction-service';
import { TransactionController } from './controllers/transaction-controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './entity/transaction.entity';
import { Category } from './entity/category.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Transaction, Category])],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}
