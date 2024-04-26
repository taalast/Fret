import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DeclarationArticlesEvaluationService } from "./declarationArticlesEvaluation.service";
import { DeclarationArticlesEvaluationControllerBase } from "./base/declarationArticlesEvaluation.controller.base";

@swagger.ApiTags("declarationArticlesEvaluations")
@common.Controller("declarationArticlesEvaluations")
export class DeclarationArticlesEvaluationController extends DeclarationArticlesEvaluationControllerBase {
  constructor(
    protected readonly service: DeclarationArticlesEvaluationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
