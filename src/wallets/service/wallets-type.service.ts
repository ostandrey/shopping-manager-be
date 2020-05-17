import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WalletType } from '../entity/wallet-type.entity';
@Injectable()
export class WalletsTypeService {

  constructor(
    @InjectRepository(WalletType)
    private walletsTypeRepository: Repository<WalletType>
  ) {}

  getAll(): Promise<WalletType[]> {
    return this.walletsTypeRepository.find()
  }
}
