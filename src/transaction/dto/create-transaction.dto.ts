import { IsDate, IsInt, IsString } from 'class-validator';

export class CreateTransactionDto {
  @IsInt()
  readonly amount: number;

  @IsString()
  readonly description: string;

  @IsDate()
  readonly date: number;

  @IsInt()
  readonly categoryId: number;

  @IsInt()
  readonly walletId: number;

}
