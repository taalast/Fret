/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SpecificationWhereInput } from "./SpecificationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SpecificationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SpecificationWhereInput,
  })
  @ValidateNested()
  @Type(() => SpecificationWhereInput)
  @IsOptional()
  @Field(() => SpecificationWhereInput, {
    nullable: true,
  })
  every?: SpecificationWhereInput;

  @ApiProperty({
    required: false,
    type: () => SpecificationWhereInput,
  })
  @ValidateNested()
  @Type(() => SpecificationWhereInput)
  @IsOptional()
  @Field(() => SpecificationWhereInput, {
    nullable: true,
  })
  some?: SpecificationWhereInput;

  @ApiProperty({
    required: false,
    type: () => SpecificationWhereInput,
  })
  @ValidateNested()
  @Type(() => SpecificationWhereInput)
  @IsOptional()
  @Field(() => SpecificationWhereInput, {
    nullable: true,
  })
  none?: SpecificationWhereInput;
}
export { SpecificationListRelationFilter as SpecificationListRelationFilter };
