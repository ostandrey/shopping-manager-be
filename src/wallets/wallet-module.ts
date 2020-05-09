import { Module } from '@nestjs/common';
import { WalletsService } from './service/wallets-service';
import { WalletsController } from './controllers/wallets-controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wallet } from './entity/wallet.entity';
import { Transaction } from '../transaction/entity/transaction.entity';
import { WalletType } from './entity/wallet-type.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Wallet, WalletType, Transaction])],
  controllers: [WalletsController],
  providers: [WalletsService],
  exports: [TypeOrmModule]
})
export class WalletModule {}
