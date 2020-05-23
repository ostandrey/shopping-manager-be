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
      host: 'ec2-54-247-169-129.eu-west-1.compute.amazonaws.com',
      port: 5432,
      username: 'iiprqbfyrbgmwy',
      password: '2dc9f68808216af2f09d5cd61b25f2dc1ac3c04b0f5cf8118d4e85649e45ac41',
      database: 'postgresql-clean-61622',
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
