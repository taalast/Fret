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
import { DetailedDeclarationArticle } from "./DetailedDeclarationArticle";
import { DetailedDeclarationArticleCountArgs } from "./DetailedDeclarationArticleCountArgs";
import { DetailedDeclarationArticleFindManyArgs } from "./DetailedDeclarationArticleFindManyArgs";
import { DetailedDeclarationArticleFindUniqueArgs } from "./DetailedDeclarationArticleFindUniqueArgs";
import { DeleteDetailedDeclarationArticleArgs } from "./DeleteDetailedDeclarationArticleArgs";
import { DetailedDeclarationArticleService } from "../detailedDeclarationArticle.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DetailedDeclarationArticle)
export class DetailedDeclarationArticleResolverBase {
  constructor(
    protected readonly service: DetailedDeclarationArticleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "DetailedDeclarationArticle",
    action: "read",
    possession: "any",
  })
  async _detailedDeclarationArticlesMeta(
    @graphql.Args() args: DetailedDeclarationArticleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [DetailedDeclarationArticle])
  @nestAccessControl.UseRoles({
    resource: "DetailedDeclarationArticle",
    action: "read",
    possession: "any",
  })
  async detailedDeclarationArticles(
    @graphql.Args() args: DetailedDeclarationArticleFindManyArgs
  ): Promise<DetailedDeclarationArticle[]> {
    return this.service.detailedDeclarationArticles(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => DetailedDeclarationArticle, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "DetailedDeclarationArticle",
    action: "read",
    possession: "own",
  })
  async detailedDeclarationArticle(
    @graphql.Args() args: DetailedDeclarationArticleFindUniqueArgs
  ): Promise<DetailedDeclarationArticle | null> {
    const result = await this.service.detailedDeclarationArticle(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DetailedDeclarationArticle)
  @nestAccessControl.UseRoles({
    resource: "DetailedDeclarationArticle",
    action: "delete",
    possession: "any",
  })
  async deleteDetailedDeclarationArticle(
    @graphql.Args() args: DeleteDetailedDeclarationArticleArgs
  ): Promise<DetailedDeclarationArticle | null> {
    try {
      return await this.service.deleteDetailedDeclarationArticle(args);
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