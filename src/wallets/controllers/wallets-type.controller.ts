import { Controller, Get } from '@nestjs/common';

import { WalletsTypeService } from '../service/wallets-type.service';
import { WalletType } from '../entity/wallet-type.entity';


@Controller('wallets_type')
export class WalletsTypeController {

  constructor(private walletsTypeService: WalletsTypeService) {}

  @Get()
  async getAll(): Promise<WalletType[]> {
    return this.walletsTypeService.getAll()
  }
}
