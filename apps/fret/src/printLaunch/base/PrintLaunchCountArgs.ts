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
import { PrintLaunchWhereInput } from "./PrintLaunchWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class PrintLaunchCountArgs {
  @ApiProperty({
    required: false,
    type: () => PrintLaunchWhereInput,
  })
  @Field(() => PrintLaunchWhereInput, { nullable: true })
  @Type(() => PrintLaunchWhereInput)
  where?: PrintLaunchWhereInput;
}

export { PrintLaunchCountArgs as PrintLaunchCountArgs };