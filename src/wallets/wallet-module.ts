import { Module } from '@nestjs/common';
import { WalletsService } from './service/wallets-service';
import { WalletsController } from './controllers/wallets-controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wallet } from './entity/wallet.entity';
import { Type } from './entity/type.entity';
import { Transaction } from '../transaction/entity/transaction.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Wallet, Type, Transaction])],
  controllers: [WalletsController],
  providers: [WalletsService],
  exports: [TypeOrmModule]
})
export class WalletModule {}
