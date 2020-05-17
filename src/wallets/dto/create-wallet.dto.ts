import { IsInt, IsNumber, IsString } from 'class-validator';

export class CreateWalletDto {
  @IsString()
  readonly title: string;

  @IsInt()
  readonly typeId: number;

  @IsNumber()
  readonly balance: number;

  @IsNumber()
  readonly userId: number;
}
