import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from '../entity/transaction.entity';
import { CreateTransactionDto } from '../dto/create-transaction.dto';

@Injectable()
export class TransactionService {

  constructor(
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>) {
  }

  create(createTransactionDto: CreateTransactionDto) {
    return this.transactionRepository.insert(createTransactionDto);
  }


  getAll(): Promise<Transaction[]> {
    return this.transactionRepository.find({relations: ['category']});
  }

  getOne(id: string): Promise<Transaction> {
    return this.transactionRepository.findOne(id);
  }

  async delete(id: string): Promise<void> {
    await this.transactionRepository.delete(id);
  }

  // create(transaction: TransactionModel) {
  //   const newTransaction: TransactionModel = {
  //     id: this.transactions[this.transactions.length - 1].id + 1,
  //     ...transaction
  //   };
  //
  //   this.transactions.push(newTransaction);
  // }
  //
  // getAll(): TransactionModel[] {
  //   return this.transactions
  // }
  //
  // getOne(id: string): TransactionModel {
  //   const idx: number = this.transactions.findIndex(
  //     (transaction:TransactionModel) => transaction.id === Number(id)
  //   );
  //   return this.transactions[idx]
  // }
  //
  // //not work
  // update(id: string): TransactionModel {
  //   const idx: number = this.transactions.findIndex(
  //     (transaction:TransactionModel) => transaction.id === Number(id)
  //   );
  //   return this.transactions[idx]
  // }
  //
  // delete(id: string): void {
  //   const idx: number = this.transactions.findIndex(
  //     (transaction:TransactionModel) => transaction.id === Number(id)
  //   );
  //   this.transactions = [
  //     ...this.transactions.slice(0, idx),
  //     ...this.transactions.slice(idx + 1)
  //   ]
  // }
}
