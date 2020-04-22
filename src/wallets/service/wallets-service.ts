import { Injectable } from '@nestjs/common';
import { WalletModel } from '../models/wallet-model';

@Injectable()
export class WalletsService {
  wallets: WalletModel[] = [
    {id: 0, title: 'My-wallet', type: 'Cash', balance: 12313},
    {id: 1, title: 'Wallets', type: 'Cash', balance: 54643},
    {id: 2, title: 'My-wallet', type: 'Cash', balance: 12313}
  ];

  create(wallet: WalletModel) {
    const newWallet: WalletModel = {
      id: this.wallets[this.wallets.length - 1].id + 1,
      ...wallet
    };

    this.wallets.push(newWallet);
  }

  getAll(): WalletModel[] {
    return this.wallets
  }

  getOne(id: string): WalletModel {
    const idx: number = this.wallets.findIndex(
      (wallet:WalletModel) => wallet.id === Number(id)
    );
    return this.wallets[idx]
  }

  delete(id: string): void {
    const idx: number = this.wallets.findIndex(
      (wallet:WalletModel) => wallet.id === Number(id)
    );
    this.wallets = [
      ...this.wallets.slice(0, idx),
      ...this.wallets.slice(idx + 1)
    ]
  }
}
