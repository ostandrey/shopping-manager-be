import { Injectable } from '@nestjs/common';
import { WalletModel } from '../models/wallet-model';
import { Observable, of } from 'rxjs';
import { MockedWallets } from '../mocks/mocked-wallets';

@Injectable()
export class WalletService {
  public findAll(): Observable<WalletModel[]> {
    return  of(MockedWallets);
  }
}
