import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransactionCategoryType } from '../entity/transaction-type.entity';

@Injectable()
export class TransactionCategoryTypesService{

  constructor(
    @InjectRepository(TransactionCategoryType)
    private transactionCategoryTypesRepository: Repository<TransactionCategoryType>
  ) {}

  getAll(): Promise<TransactionCategoryType[]> {
    return this.transactionCategoryTypesRepository.find();
  }
}
