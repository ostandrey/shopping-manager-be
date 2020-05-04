import { Module } from '@nestjs/common';
import { WalletModule } from './wallets/wallet-module';
import { TransactionModule } from './transaction/transaction-module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Wallet } from './wallets/entity/wallet.entity';
import { Type } from './wallets/entity/type.entity';

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
      entities: [Wallet, Type],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
