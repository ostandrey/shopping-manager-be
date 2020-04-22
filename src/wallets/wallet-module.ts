import { Module } from '@nestjs/common';
import { WalletController } from './controllers/wallet-controller';
import { WalletService } from './service/wallet-service';
import { WalletsService } from './service/wallets-service';
import { WalletsController } from './controllers/wallets-controller';


@Module({
  imports: [],
  controllers: [WalletController, WalletsController],
  providers: [ WalletService, WalletsService],
})
export class WalletModule {}
