import { IsEnum, IsNumber, IsString } from 'class-validator';

enum pizzaSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

// DTO = Data Transfer Object
export class CreatePizzasDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly price: number;

  @IsEnum(pizzaSize)
  readonly size: pizzaSize;
}
