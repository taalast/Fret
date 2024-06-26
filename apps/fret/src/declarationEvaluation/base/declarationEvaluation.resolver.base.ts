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
import { DeclarationEvaluation } from "./DeclarationEvaluation";
import { DeclarationEvaluationCountArgs } from "./DeclarationEvaluationCountArgs";
import { DeclarationEvaluationFindManyArgs } from "./DeclarationEvaluationFindManyArgs";
import { DeclarationEvaluationFindUniqueArgs } from "./DeclarationEvaluationFindUniqueArgs";
import { DeleteDeclarationEvaluationArgs } from "./DeleteDeclarationEvaluationArgs";
import { DeclarationEvaluationService } from "../declarationEvaluation.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DeclarationEvaluation)
export class DeclarationEvaluationResolverBase {
  constructor(
    protected readonly service: DeclarationEvaluationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "DeclarationEvaluation",
    action: "read",
    possession: "any",
  })
  async _declarationEvaluationsMeta(
    @graphql.Args() args: DeclarationEvaluationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [DeclarationEvaluation])
  @nestAccessControl.UseRoles({
    resource: "DeclarationEvaluation",
    action: "read",
    possession: "any",
  })
  async declarationEvaluations(
    @graphql.Args() args: DeclarationEvaluationFindManyArgs
  ): Promise<DeclarationEvaluation[]> {
    return this.service.declarationEvaluations(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => DeclarationEvaluation, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "DeclarationEvaluation",
    action: "read",
    possession: "own",
  })
  async declarationEvaluation(
    @graphql.Args() args: DeclarationEvaluationFindUniqueArgs
  ): Promise<DeclarationEvaluation | null> {
    const result = await this.service.declarationEvaluation(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DeclarationEvaluation)
  @nestAccessControl.UseRoles({
    resource: "DeclarationEvaluation",
    action: "delete",
    possession: "any",
  })
  async deleteDeclarationEvaluation(
    @graphql.Args() args: DeleteDeclarationEvaluationArgs
  ): Promise<DeclarationEvaluation | null> {
    try {
      return await this.service.deleteDeclarationEvaluation(args);
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
