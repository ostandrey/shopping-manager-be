import { Module } from '@nestjs/common';
import { WalletModule } from './wallets/wallet-module';
import { TransactionModule } from './transaction/transaction-module';

@Module({
  imports: [WalletModule, TransactionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
