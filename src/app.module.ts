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
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { Users } from './users/entity/users.entity';


@Module({
  imports: [
    WalletModule,
    TransactionModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-54-247-78-30.eu-west-1.compute.amazonaws.com',
      port: 5432,
      username: 'ccsslmemmtoszs',
      password: '4ab65f0400900ef5f35f812696cf51329f124d81b71ea1b3c35822a99175240d',
      database: 'dbh5505i6c6rkr',
      entities: [
        Users,
        Wallet,
        WalletType,
        Transaction,
        TransactionCategory,
        TransactionCategoryType
      ],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
