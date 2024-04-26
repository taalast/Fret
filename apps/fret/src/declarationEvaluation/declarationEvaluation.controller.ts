import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DeclarationEvaluationService } from "./declarationEvaluation.service";
import { DeclarationEvaluationControllerBase } from "./base/declarationEvaluation.controller.base";

@swagger.ApiTags("declarationEvaluations")
@common.Controller("declarationEvaluations")
export class DeclarationEvaluationController extends DeclarationEvaluationControllerBase {
  constructor(
    protected readonly service: DeclarationEvaluationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
