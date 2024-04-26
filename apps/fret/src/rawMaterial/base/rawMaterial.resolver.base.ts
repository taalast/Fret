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
import { RawMaterial } from "./RawMaterial";
import { RawMaterialCountArgs } from "./RawMaterialCountArgs";
import { RawMaterialFindManyArgs } from "./RawMaterialFindManyArgs";
import { RawMaterialFindUniqueArgs } from "./RawMaterialFindUniqueArgs";
import { DeleteRawMaterialArgs } from "./DeleteRawMaterialArgs";
import { RawMaterialService } from "../rawMaterial.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RawMaterial)
export class RawMaterialResolverBase {
  constructor(
    protected readonly service: RawMaterialService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "RawMaterial",
    action: "read",
    possession: "any",
  })
  async _rawMaterialsMeta(
    @graphql.Args() args: RawMaterialCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [RawMaterial])
  @nestAccessControl.UseRoles({
    resource: "RawMaterial",
    action: "read",
    possession: "any",
  })
  async rawMaterials(
    @graphql.Args() args: RawMaterialFindManyArgs
  ): Promise<RawMaterial[]> {
    return this.service.rawMaterials(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => RawMaterial, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "RawMaterial",
    action: "read",
    possession: "own",
  })
  async rawMaterial(
    @graphql.Args() args: RawMaterialFindUniqueArgs
  ): Promise<RawMaterial | null> {
    const result = await this.service.rawMaterial(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => RawMaterial)
  @nestAccessControl.UseRoles({
    resource: "RawMaterial",
    action: "delete",
    possession: "any",
  })
  async deleteRawMaterial(
    @graphql.Args() args: DeleteRawMaterialArgs
  ): Promise<RawMaterial | null> {
    try {
      return await this.service.deleteRawMaterial(args);
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