/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ValidationWhereInput } from "./ValidationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ValidationOrderByInput } from "./ValidationOrderByInput";

@ArgsType()
class ValidationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ValidationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ValidationWhereInput, { nullable: true })
  @Type(() => ValidationWhereInput)
  where?: ValidationWhereInput;

  @ApiProperty({
    required: false,
    type: [ValidationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ValidationOrderByInput], { nullable: true })
  @Type(() => ValidationOrderByInput)
  orderBy?: Array<ValidationOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ValidationFindManyArgs as ValidationFindManyArgs };
