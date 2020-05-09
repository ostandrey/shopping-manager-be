import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Wallet } from '../entity/wallet.entity';
import { Repository } from 'typeorm';
import { CreateWalletDto } from '../dto/create-wallet.dto';

@Injectable()
export class WalletsService {

  constructor(
    @InjectRepository(Wallet)
    private walletsRepository: Repository<Wallet>
  ) {}

  create(createWalletDto: CreateWalletDto) {
    return this.walletsRepository.insert(createWalletDto);
  }


  getAll(): Promise<Wallet[]> {
    return this.walletsRepository.find({
      join: {
        alias: "wallet",
        leftJoinAndSelect: {
          "transaction": "wallet.transaction",
          "category": "transaction.category"
        }
      },
      relations: ['type', 'transaction']});
  }

  getOne(id: string): Promise<Wallet> {
    return this.walletsRepository.findOne(id, {
      where: {id: id},
      join: {
        alias: "wallet",
        leftJoinAndSelect: {
          "transaction": "wallet.transaction",
          "category": "transaction.category"
        }
      },
      relations: ['type', 'transaction']
    });
  }

  async delete(id: string): Promise<void> {
    await this.walletsRepository.delete(id);
  }
}

