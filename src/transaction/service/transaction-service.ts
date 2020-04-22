import { Injectable } from '@nestjs/common';
import { TransactionModel } from '../models/transaction-model';

@Injectable()
export class TransactionService {
  transactions: TransactionModel[] = [
    {id: 0, amount: '', category: 'My-wallet', description: 'Cash', dateTable: 12313},
    {id: 1, amount: '', category: 'My-wallet', description: 'Cash', dateTable: 12313},
    {id: 2, amount: '', category: 'My-wallet', description: 'Cash', dateTable: 12313},
    {id: 3, amount: '', category: 'My-wallet', description: 'Cash', dateTable: 12313},
  ];

  create(transaction: TransactionModel) {
    const newTransaction: TransactionModel = {
      id: this.transactions[this.transactions.length - 1].id + 1,
      ...transaction
    };

    this.transactions.push(newTransaction);
  }

  getAll(): TransactionModel[] {
    return this.transactions
  }

  getOne(id: string): TransactionModel {
    const idx: number = this.transactions.findIndex(
      (transaction:TransactionModel) => transaction.id === Number(id)
    );
    return this.transactions[idx]
  }

  //not work
  update(id: string): TransactionModel {
    const idx: number = this.transactions.findIndex(
      (transaction:TransactionModel) => transaction.id === Number(id)
    );
    return this.transactions[idx]
  }

  delete(id: string): void {
    const idx: number = this.transactions.findIndex(
      (transaction:TransactionModel) => transaction.id === Number(id)
    );
    this.transactions = [
      ...this.transactions.slice(0, idx),
      ...this.transactions.slice(idx + 1)
    ]
  }
}
