import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DetailedDeclarationArticleResolverBase } from "./base/detailedDeclarationArticle.resolver.base";
import { DetailedDeclarationArticle } from "./base/DetailedDeclarationArticle";
import { DetailedDeclarationArticleService } from "./detailedDeclarationArticle.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DetailedDeclarationArticle)
export class DetailedDeclarationArticleResolver extends DetailedDeclarationArticleResolverBase {
  constructor(
    protected readonly service: DetailedDeclarationArticleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
