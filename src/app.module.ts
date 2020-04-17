import { Module } from '@nestjs/common';
import { WalletModule } from './wallets/wallet-module';

@Module({
  imports: [WalletModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
