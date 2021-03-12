import { IsString, MaxLength, MinLength, IsNumber } from "class-validator";

export class CreateShoppingHistoryDto {
  @MinLength(1, { message: "name length should be between 1 and 100" })
  @MaxLength(100, { message: "name length should be between 1 and 100" })
  @IsString()
  readonly name: string;

  @MinLength(1, { message: "status length should be between 1 and 100" })
  @MaxLength(100, { message: "status length should be between 1 and 100" })
  @IsString()
  readonly status: string;

  @IsNumber({}, { each: true })
  readonly itemsIds: number[];
}
