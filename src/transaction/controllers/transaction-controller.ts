import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TransactionService } from '../service/transaction-service';
import { TransactionModel } from '../models/transaction-model';


@Controller('transactions')
export class TransactionController {

  constructor(private transactionService: TransactionService) {}

  @Get()
  getAll(): TransactionModel[] {
    return this.transactionService.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: string): TransactionModel {
    return this.transactionService.getOne(id)
  }

  @Post()
  create(@Body() transaction: TransactionModel) {
    return this.transactionService.create(transaction)
  }

  @Put('id')
  update(@Param('id') id: string, @Body() transaction: TransactionModel) {
    return this.transactionService.update(id)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.transactionService.delete(id)
  }

}
