import { Controller, Get } from '@nestjs/common';
import { TransactionCategoryTypesService } from '../service/transaction-category-types.service';
import { TransactionCategoryType } from '../entity/transaction-type.entity';


@Controller('transaction_category_types')
export class TransactionCategoryTypesController{

  constructor(
    private transactionCategoryTypesService: TransactionCategoryTypesService
  ) {}

  @Get()
  async getAll(): Promise<TransactionCategoryType[]> {
    return this.transactionCategoryTypesService.getAll()
  }
}
