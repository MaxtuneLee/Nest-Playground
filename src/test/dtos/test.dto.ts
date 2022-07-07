import {
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
} from 'class-validator';
export class TestDto {
  name: string;
}
export class userDto {
  name: string;
  @IsNotEmpty()
  @IsNumberString()
  uid: number;
}
