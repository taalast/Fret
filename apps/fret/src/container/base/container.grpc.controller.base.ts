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
import { ContainerService } from "../container.service";
import { ContainerCreateInput } from "./ContainerCreateInput";
import { ContainerWhereInput } from "./ContainerWhereInput";
import { ContainerWhereUniqueInput } from "./ContainerWhereUniqueInput";
import { ContainerFindManyArgs } from "./ContainerFindManyArgs";
import { ContainerUpdateInput } from "./ContainerUpdateInput";
import { Container } from "./Container";

export class ContainerGrpcControllerBase {
  constructor(protected readonly service: ContainerService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Container })
  @GrpcMethod("ContainerService", "createContainer")
  async createContainer(
    @common.Body() data: ContainerCreateInput
  ): Promise<Container> {
    return await this.service.createContainer({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Container] })
  @ApiNestedQuery(ContainerFindManyArgs)
  @GrpcMethod("ContainerService", "containers")
  async containers(@common.Req() request: Request): Promise<Container[]> {
    const args = plainToClass(ContainerFindManyArgs, request.query);
    return this.service.containers({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Container })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ContainerService", "container")
  async container(
    @common.Param() params: ContainerWhereUniqueInput
  ): Promise<Container | null> {
    const result = await this.service.container({
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
  @swagger.ApiOkResponse({ type: Container })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ContainerService", "updateContainer")
  async updateContainer(
    @common.Param() params: ContainerWhereUniqueInput,
    @common.Body() data: ContainerUpdateInput
  ): Promise<Container | null> {
    try {
      return await this.service.updateContainer({
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
  @swagger.ApiOkResponse({ type: Container })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ContainerService", "deleteContainer")
  async deleteContainer(
    @common.Param() params: ContainerWhereUniqueInput
  ): Promise<Container | null> {
    try {
      return await this.service.deleteContainer({
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
