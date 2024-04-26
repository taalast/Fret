/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Container } from "./Container";
import { ContainerCountArgs } from "./ContainerCountArgs";
import { ContainerFindManyArgs } from "./ContainerFindManyArgs";
import { ContainerFindUniqueArgs } from "./ContainerFindUniqueArgs";
import { DeleteContainerArgs } from "./DeleteContainerArgs";
import { ContainerService } from "../container.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Container)
export class ContainerResolverBase {
  constructor(
    protected readonly service: ContainerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Container",
    action: "read",
    possession: "any",
  })
  async _containersMeta(
    @graphql.Args() args: ContainerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Container])
  @nestAccessControl.UseRoles({
    resource: "Container",
    action: "read",
    possession: "any",
  })
  async containers(
    @graphql.Args() args: ContainerFindManyArgs
  ): Promise<Container[]> {
    return this.service.containers(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Container, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Container",
    action: "read",
    possession: "own",
  })
  async container(
    @graphql.Args() args: ContainerFindUniqueArgs
  ): Promise<Container | null> {
    const result = await this.service.container(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Container)
  @nestAccessControl.UseRoles({
    resource: "Container",
    action: "delete",
    possession: "any",
  })
  async deleteContainer(
    @graphql.Args() args: DeleteContainerArgs
  ): Promise<Container | null> {
    try {
      return await this.service.deleteContainer(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
