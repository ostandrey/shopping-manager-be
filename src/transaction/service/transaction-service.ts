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

  getWithParams(params): Promise<Transaction[]> {
    return this.transactionRepository.find({where: {}})
  }

  getOne(id: string): Promise<Transaction> {
    return this.transactionRepository.findOne(id, {relations: ['category']});
  }

  async delete(id: string): Promise<void> {
    await this.transactionRepository.delete(id);
  }

  async update(id: string, updateTransactionDto: CreateTransactionDto) {
    return await this.transactionRepository.save({
      id: Number(id),
      ...updateTransactionDto
    });
  }
}
