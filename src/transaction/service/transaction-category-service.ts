import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransactionCategory } from '../entity/transaction-category.entity';

@Injectable()
export class TransactionCategoryService{
  constructor(
    @InjectRepository(TransactionCategory)
    private transactionCategoryRepository: Repository<TransactionCategory>) {
  }

  getAll(): Promise<TransactionCategory[]> {
    return this.transactionCategoryRepository.find({relations: ['type']});
  }

  getOne(id: string): Promise<TransactionCategory> {
    return this.transactionCategoryRepository.findOne(id);
  }
}
