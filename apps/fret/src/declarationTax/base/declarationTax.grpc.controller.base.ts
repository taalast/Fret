/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { GrpcMethod } from "@nestjs/microservices";
import { DeclarationTaxService } from "../declarationTax.service";
import { DeclarationTaxCreateInput } from "./DeclarationTaxCreateInput";
import { DeclarationTaxWhereInput } from "./DeclarationTaxWhereInput";
import { DeclarationTaxWhereUniqueInput } from "./DeclarationTaxWhereUniqueInput";
import { DeclarationTaxFindManyArgs } from "./DeclarationTaxFindManyArgs";
import { DeclarationTaxUpdateInput } from "./DeclarationTaxUpdateInput";
import { DeclarationTax } from "./DeclarationTax";

export class DeclarationTaxGrpcControllerBase {
  constructor(protected readonly service: DeclarationTaxService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DeclarationTax })
  @GrpcMethod("DeclarationTaxService", "createDeclarationTax")
  async createDeclarationTax(
    @common.Body() data: DeclarationTaxCreateInput
  ): Promise<DeclarationTax> {
    return await this.service.createDeclarationTax({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [DeclarationTax] })
  @ApiNestedQuery(DeclarationTaxFindManyArgs)
  @GrpcMethod("DeclarationTaxService", "declarationTaxes")
  async declarationTaxes(
    @common.Req() request: Request
  ): Promise<DeclarationTax[]> {
    const args = plainToClass(DeclarationTaxFindManyArgs, request.query);
    return this.service.declarationTaxes({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DeclarationTax })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("DeclarationTaxService", "declarationTax")
  async declarationTax(
    @common.Param() params: DeclarationTaxWhereUniqueInput
  ): Promise<DeclarationTax | null> {
    const result = await this.service.declarationTax({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: DeclarationTax })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("DeclarationTaxService", "updateDeclarationTax")
  async updateDeclarationTax(
    @common.Param() params: DeclarationTaxWhereUniqueInput,
    @common.Body() data: DeclarationTaxUpdateInput
  ): Promise<DeclarationTax | null> {
    try {
      return await this.service.updateDeclarationTax({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: DeclarationTax })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("DeclarationTaxService", "deleteDeclarationTax")
  async deleteDeclarationTax(
    @common.Param() params: DeclarationTaxWhereUniqueInput
  ): Promise<DeclarationTax | null> {
    try {
      return await this.service.deleteDeclarationTax({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}