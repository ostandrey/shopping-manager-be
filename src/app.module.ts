import { Module } from '@nestjs/common';
import { WalletModule } from './wallets/wallet-module';
import { TransactionModule } from './transaction/transaction-module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Wallet } from './wallets/entity/wallet.entity';
import { WalletType } from './wallets/entity/wallet-type.entity';
import { Transaction } from './transaction/entity/transaction.entity';
import { TransactionCategory } from './transaction/entity/transaction-category.entity';
import { TransactionCategoryType } from './transaction/entity/transaction-type.entity';


@Module({
  imports: [
    WalletModule,
    TransactionModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'moneymanager',
      entities: [
        Wallet,
        WalletType,
        Transaction,
        TransactionCategory,
        TransactionCategoryType
      ],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
