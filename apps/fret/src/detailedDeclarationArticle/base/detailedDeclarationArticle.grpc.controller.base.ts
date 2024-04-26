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
import { DetailedDeclarationArticleService } from "../detailedDeclarationArticle.service";
import { DetailedDeclarationArticleCreateInput } from "./DetailedDeclarationArticleCreateInput";
import { DetailedDeclarationArticleWhereInput } from "./DetailedDeclarationArticleWhereInput";
import { DetailedDeclarationArticleWhereUniqueInput } from "./DetailedDeclarationArticleWhereUniqueInput";
import { DetailedDeclarationArticleFindManyArgs } from "./DetailedDeclarationArticleFindManyArgs";
import { DetailedDeclarationArticleUpdateInput } from "./DetailedDeclarationArticleUpdateInput";
import { DetailedDeclarationArticle } from "./DetailedDeclarationArticle";

export class DetailedDeclarationArticleGrpcControllerBase {
  constructor(protected readonly service: DetailedDeclarationArticleService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DetailedDeclarationArticle })
  @GrpcMethod(
    "DetailedDeclarationArticleService",
    "createDetailedDeclarationArticle"
  )
  async createDetailedDeclarationArticle(
    @common.Body() data: DetailedDeclarationArticleCreateInput
  ): Promise<DetailedDeclarationArticle> {
    return await this.service.createDetailedDeclarationArticle({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [DetailedDeclarationArticle] })
  @ApiNestedQuery(DetailedDeclarationArticleFindManyArgs)
  @GrpcMethod(
    "DetailedDeclarationArticleService",
    "detailedDeclarationArticles"
  )
  async detailedDeclarationArticles(
    @common.Req() request: Request
  ): Promise<DetailedDeclarationArticle[]> {
    const args = plainToClass(
      DetailedDeclarationArticleFindManyArgs,
      request.query
    );
    return this.service.detailedDeclarationArticles({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DetailedDeclarationArticle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("DetailedDeclarationArticleService", "detailedDeclarationArticle")
  async detailedDeclarationArticle(
    @common.Param() params: DetailedDeclarationArticleWhereUniqueInput
  ): Promise<DetailedDeclarationArticle | null> {
    const result = await this.service.detailedDeclarationArticle({
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
  @swagger.ApiOkResponse({ type: DetailedDeclarationArticle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "DetailedDeclarationArticleService",
    "updateDetailedDeclarationArticle"
  )
  async updateDetailedDeclarationArticle(
    @common.Param() params: DetailedDeclarationArticleWhereUniqueInput,
    @common.Body() data: DetailedDeclarationArticleUpdateInput
  ): Promise<DetailedDeclarationArticle | null> {
    try {
      return await this.service.updateDetailedDeclarationArticle({
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
  @swagger.ApiOkResponse({ type: DetailedDeclarationArticle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "DetailedDeclarationArticleService",
    "deleteDetailedDeclarationArticle"
  )
  async deleteDetailedDeclarationArticle(
    @common.Param() params: DetailedDeclarationArticleWhereUniqueInput
  ): Promise<DetailedDeclarationArticle | null> {
    try {
      return await this.service.deleteDetailedDeclarationArticle({
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