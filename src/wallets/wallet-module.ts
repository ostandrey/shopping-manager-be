import { Module } from '@nestjs/common';
import { WalletController } from './wallet-controller';
import { WalletService } from './service/wallet-service';


@Module({
  imports: [],
  controllers: [WalletController],
  providers: [ WalletService],
})
export class WalletModule {}
