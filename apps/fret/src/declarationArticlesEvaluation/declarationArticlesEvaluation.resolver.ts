import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DeclarationArticlesEvaluationResolverBase } from "./base/declarationArticlesEvaluation.resolver.base";
import { DeclarationArticlesEvaluation } from "./base/DeclarationArticlesEvaluation";
import { DeclarationArticlesEvaluationService } from "./declarationArticlesEvaluation.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DeclarationArticlesEvaluation)
export class DeclarationArticlesEvaluationResolver extends DeclarationArticlesEvaluationResolverBase {
  constructor(
    protected readonly service: DeclarationArticlesEvaluationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
