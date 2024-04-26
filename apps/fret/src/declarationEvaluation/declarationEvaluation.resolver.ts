import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DeclarationEvaluationResolverBase } from "./base/declarationEvaluation.resolver.base";
import { DeclarationEvaluation } from "./base/DeclarationEvaluation";
import { DeclarationEvaluationService } from "./declarationEvaluation.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DeclarationEvaluation)
export class DeclarationEvaluationResolver extends DeclarationEvaluationResolverBase {
  constructor(
    protected readonly service: DeclarationEvaluationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
