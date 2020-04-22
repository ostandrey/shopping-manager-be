import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { WalletService } from '../service/wallet-service';
import { WalletModel } from '../models/wallet-model';
import { WalletsService } from '../service/wallets-service';


@Controller('wallets')
export class WalletsController {

  constructor(private walletService: WalletsService) {}

  @Get()
  getAll(): WalletModel[] {
    return this.walletService.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: string): WalletModel {
    return this.walletService.getOne(id)
  }

  @Post()
  create(@Body() wallet: WalletModel) {
    return this.walletService.create(wallet)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.walletService.delete(id)
  }

}
