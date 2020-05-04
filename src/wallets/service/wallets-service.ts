import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Wallet } from '../entity/wallet.entity';
import { Repository } from 'typeorm';
import { CreateWalletDto } from '../dto/create-wallet.dto';

@Injectable()
export class WalletsService {
  // wallets: WalletModel[] = [
  //   {id: 0, title: 'My-wallet', type: 'Cash', balance: 12313},
  //   {id: 1, title: 'Wallets', type: 'Cash', balance: 54643},
  //   {id: 2, title: 'My-wallet', type: 'Cash', balance: 12313}
  // ];

  constructor(
    @InjectRepository(Wallet)
    private walletsRepository: Repository<Wallet>
  ) {}

   // create(wallet: WalletModel) {
   //   const newWallet: WalletModel = {
   //     id: this.wallets[this.wallets.length - 1].id + 1,
   //     ...wallet
   //   };
   //
   //   this.wallets.push(newWallet);
   // }

  create(createWalletDto: CreateWalletDto) {
    return this.walletsRepository.insert(createWalletDto);
  }


  getAll(): Promise<Wallet[]> {
    return this.walletsRepository.find({relations: ['type']});
    // return this.wallets;
  }

  getOne(id: string): Promise<Wallet> {
    // const idx: number = this.wallets.findIndex(
    //   (wallet:WalletModel) => wallet.id === Number(id)
    // );
    // return this.wallets[idx]
    return this.walletsRepository.findOne(id);
  }

  async delete(id: string): Promise<void> {
    // const idx: number = this.wallets.findIndex(
    //   (wallet:WalletModel) => wallet.id === Number(id)
    // );
    // this.wallets = [
    //   ...this.wallets.slice(0, idx),
    //   ...this.wallets.slice(idx + 1)
    // ]
    await this.walletsRepository.delete(id);
  }
}
