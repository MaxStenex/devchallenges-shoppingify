import {
  IsString,
  MaxLength,
  MinLength,
  IsUrl,
  IsOptional,
} from "class-validator";

export class CreateItemDto {
  @MinLength(1, { message: "name length should be between 1 and 100" })
  @MaxLength(100, { message: "name length should be between 1 and 100" })
  @IsString()
  readonly name: string;

  @IsOptional()
  @MaxLength(100, { message: "maximum note length is 100" })
  @IsString()
  readonly note?: string;

  @IsOptional()
  @IsUrl()
  readonly imageUrl?: string;

  @MinLength(1, { message: "category length should be between 1 and 100" })
  @MaxLength(100, { message: "category length should be between 1 and 100" })
  @IsString()
  readonly categoryTitle: string;
}
