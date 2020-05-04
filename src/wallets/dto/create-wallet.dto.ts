import { IsInt, IsString } from 'class-validator';

export class CreateWalletDto {
  @IsString()
  readonly title: string;

  @IsInt()
  readonly typeId: number;
}
