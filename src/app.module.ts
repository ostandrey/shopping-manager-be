import { Module } from '@nestjs/common';
import { WalletModule } from './wallets/wallet-module';
import { TransactionModule } from './transaction/transaction-module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Wallet } from './wallets/entity/wallet.entity';
import { Type } from './wallets/entity/type.entity';
import { Transaction } from './transaction/entity/transaction.entity';
import { Category } from './transaction/entity/category.entity';
import { CategoryName } from './transaction/entity/category_name.entity';
import { TypeCategory } from './transaction/entity/type_category.entity';

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
      entities: [Wallet, Type, Transaction, Category, CategoryName, TypeCategory],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
