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
import { SpecificationWhereInput } from "./SpecificationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SpecificationOrderByInput } from "./SpecificationOrderByInput";

@ArgsType()
class SpecificationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SpecificationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SpecificationWhereInput, { nullable: true })
  @Type(() => SpecificationWhereInput)
  where?: SpecificationWhereInput;

  @ApiProperty({
    required: false,
    type: [SpecificationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SpecificationOrderByInput], { nullable: true })
  @Type(() => SpecificationOrderByInput)
  orderBy?: Array<SpecificationOrderByInput>;

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

export { SpecificationFindManyArgs as SpecificationFindManyArgs };