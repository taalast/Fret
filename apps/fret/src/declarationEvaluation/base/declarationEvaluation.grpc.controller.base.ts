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
import { DeclarationEvaluationService } from "../declarationEvaluation.service";
import { DeclarationEvaluationCreateInput } from "./DeclarationEvaluationCreateInput";
import { DeclarationEvaluationWhereInput } from "./DeclarationEvaluationWhereInput";
import { DeclarationEvaluationWhereUniqueInput } from "./DeclarationEvaluationWhereUniqueInput";
import { DeclarationEvaluationFindManyArgs } from "./DeclarationEvaluationFindManyArgs";
import { DeclarationEvaluationUpdateInput } from "./DeclarationEvaluationUpdateInput";
import { DeclarationEvaluation } from "./DeclarationEvaluation";

export class DeclarationEvaluationGrpcControllerBase {
  constructor(protected readonly service: DeclarationEvaluationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DeclarationEvaluation })
  @GrpcMethod("DeclarationEvaluationService", "createDeclarationEvaluation")
  async createDeclarationEvaluation(
    @common.Body() data: DeclarationEvaluationCreateInput
  ): Promise<DeclarationEvaluation> {
    return await this.service.createDeclarationEvaluation({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [DeclarationEvaluation] })
  @ApiNestedQuery(DeclarationEvaluationFindManyArgs)
  @GrpcMethod("DeclarationEvaluationService", "declarationEvaluations")
  async declarationEvaluations(
    @common.Req() request: Request
  ): Promise<DeclarationEvaluation[]> {
    const args = plainToClass(DeclarationEvaluationFindManyArgs, request.query);
    return this.service.declarationEvaluations({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DeclarationEvaluation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("DeclarationEvaluationService", "declarationEvaluation")
  async declarationEvaluation(
    @common.Param() params: DeclarationEvaluationWhereUniqueInput
  ): Promise<DeclarationEvaluation | null> {
    const result = await this.service.declarationEvaluation({
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
  @swagger.ApiOkResponse({ type: DeclarationEvaluation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("DeclarationEvaluationService", "updateDeclarationEvaluation")
  async updateDeclarationEvaluation(
    @common.Param() params: DeclarationEvaluationWhereUniqueInput,
    @common.Body() data: DeclarationEvaluationUpdateInput
  ): Promise<DeclarationEvaluation | null> {
    try {
      return await this.service.updateDeclarationEvaluation({
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
  @swagger.ApiOkResponse({ type: DeclarationEvaluation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("DeclarationEvaluationService", "deleteDeclarationEvaluation")
  async deleteDeclarationEvaluation(
    @common.Param() params: DeclarationEvaluationWhereUniqueInput
  ): Promise<DeclarationEvaluation | null> {
    try {
      return await this.service.deleteDeclarationEvaluation({
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
