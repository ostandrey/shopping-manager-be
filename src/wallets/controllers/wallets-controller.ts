import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { WalletsService } from '../service/wallets-service';
import { CreateWalletDto } from '../dto/create-wallet.dto';
import { Wallet } from '../entity/wallet.entity';


@Controller('wallets')
export class WalletsController {

  constructor(private walletService: WalletsService) {}

  @Get()
  async getAll(): Promise<Wallet[]> {
    return this.walletService.getAll()
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<Wallet> {
    return this.walletService.getOne(id)
  }

  @Post()
  async create(@Body() createWalletDto: CreateWalletDto) {
    console.log(createWalletDto);
    await this.walletService.create(createWalletDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.walletService.delete(id)
  }

}
