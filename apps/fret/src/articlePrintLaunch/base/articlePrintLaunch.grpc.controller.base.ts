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
import { ArticlePrintLaunchService } from "../articlePrintLaunch.service";
import { ArticlePrintLaunchCreateInput } from "./ArticlePrintLaunchCreateInput";
import { ArticlePrintLaunchWhereInput } from "./ArticlePrintLaunchWhereInput";
import { ArticlePrintLaunchWhereUniqueInput } from "./ArticlePrintLaunchWhereUniqueInput";
import { ArticlePrintLaunchFindManyArgs } from "./ArticlePrintLaunchFindManyArgs";
import { ArticlePrintLaunchUpdateInput } from "./ArticlePrintLaunchUpdateInput";
import { ArticlePrintLaunch } from "./ArticlePrintLaunch";

export class ArticlePrintLaunchGrpcControllerBase {
  constructor(protected readonly service: ArticlePrintLaunchService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ArticlePrintLaunch })
  @GrpcMethod("ArticlePrintLaunchService", "createArticlePrintLaunch")
  async createArticlePrintLaunch(
    @common.Body() data: ArticlePrintLaunchCreateInput
  ): Promise<ArticlePrintLaunch> {
    return await this.service.createArticlePrintLaunch({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ArticlePrintLaunch] })
  @ApiNestedQuery(ArticlePrintLaunchFindManyArgs)
  @GrpcMethod("ArticlePrintLaunchService", "articlePrintLaunches")
  async articlePrintLaunches(
    @common.Req() request: Request
  ): Promise<ArticlePrintLaunch[]> {
    const args = plainToClass(ArticlePrintLaunchFindManyArgs, request.query);
    return this.service.articlePrintLaunches({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ArticlePrintLaunch })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ArticlePrintLaunchService", "articlePrintLaunch")
  async articlePrintLaunch(
    @common.Param() params: ArticlePrintLaunchWhereUniqueInput
  ): Promise<ArticlePrintLaunch | null> {
    const result = await this.service.articlePrintLaunch({
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
  @swagger.ApiOkResponse({ type: ArticlePrintLaunch })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ArticlePrintLaunchService", "updateArticlePrintLaunch")
  async updateArticlePrintLaunch(
    @common.Param() params: ArticlePrintLaunchWhereUniqueInput,
    @common.Body() data: ArticlePrintLaunchUpdateInput
  ): Promise<ArticlePrintLaunch | null> {
    try {
      return await this.service.updateArticlePrintLaunch({
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
  @swagger.ApiOkResponse({ type: ArticlePrintLaunch })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ArticlePrintLaunchService", "deleteArticlePrintLaunch")
  async deleteArticlePrintLaunch(
    @common.Param() params: ArticlePrintLaunchWhereUniqueInput
  ): Promise<ArticlePrintLaunch | null> {
    try {
      return await this.service.deleteArticlePrintLaunch({
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
