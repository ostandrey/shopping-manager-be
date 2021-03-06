import { Module } from '@nestjs/common';
import { WalletsService } from './service/wallets-service';
import { WalletsController } from './controllers/wallets-controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wallet } from './entity/wallet.entity';
import { Transaction } from '../transaction/entity/transaction.entity';
import { WalletType } from './entity/wallet-type.entity';
import { WalletsTypeController } from './controllers/wallets-type.controller';
import { WalletsTypeService } from './service/wallets-type.service';
import { TransactionCategory } from '../transaction/entity/transaction-category.entity';
import { TransactionCategoryType } from '../transaction/entity/transaction-type.entity';


@Module({
  imports: [TypeOrmModule.forFeature([
    Wallet,
    WalletType,
    Transaction,
    TransactionCategory,
    TransactionCategoryType
  ])],
  controllers: [WalletsController, WalletsTypeController],
  providers: [WalletsService, WalletsTypeService],
  exports: [TypeOrmModule]
})
export class WalletModule {}
