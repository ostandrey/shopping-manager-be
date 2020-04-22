import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { WalletService } from '../service/wallet-service';
import { WalletModel } from '../models/wallet-model';


@Controller('dashboard')
export class WalletController {

  constructor(private walletService: WalletService) {
  }

  @Get()
  findAll(): Observable<WalletModel[]>{
    return this.walletService.findAll();
  }
}
