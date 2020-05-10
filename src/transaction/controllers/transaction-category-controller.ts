import { Controller, Get, Param } from '@nestjs/common';
import { TransactionCategoryService } from '../service/transaction-category-service';
import { TransactionCategory } from '../entity/transaction-category.entity';


@Controller('categories')
export class TransactionCategoryController{
  constructor(private transactionCategoryService: TransactionCategoryService) {}


  @Get()
  async getAll(): Promise<TransactionCategory[]> {
    return this.transactionCategoryService.getAll()
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<TransactionCategory> {
    return this.transactionCategoryService.getOne(id)
  }

}
