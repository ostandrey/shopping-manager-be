import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TransactionService } from '../service/transaction-service';
import { Transaction } from '../entity/transaction.entity';
import { CreateTransactionDto } from '../dto/create-transaction.dto';


@Controller('transactions')
export class TransactionController {

  constructor(private transactionService: TransactionService) {}

  @Get()
  async getAll(): Promise<Transaction[]> {
    return this.transactionService.getAll()
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<Transaction> {
    return this.transactionService.getOne(id)
  }

  @Post()
  async create(@Body() createTransactionDto: CreateTransactionDto) {
    console.log(createTransactionDto);
    return this.transactionService.create(createTransactionDto)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.transactionService.delete(id)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTransactionDto: CreateTransactionDto) {
    return this.transactionService.update(id, updateTransactionDto)
  }


}
