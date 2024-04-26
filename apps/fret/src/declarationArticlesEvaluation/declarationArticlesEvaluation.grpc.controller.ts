import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DeclarationArticlesEvaluationService } from "./declarationArticlesEvaluation.service";
import { DeclarationArticlesEvaluationGrpcControllerBase } from "./base/declarationArticlesEvaluation.grpc.controller.base";

@swagger.ApiTags("declarationArticlesEvaluations")
@common.Controller("declarationArticlesEvaluations")
export class DeclarationArticlesEvaluationGrpcController extends DeclarationArticlesEvaluationGrpcControllerBase {
  constructor(
    protected readonly service: DeclarationArticlesEvaluationService
  ) {
    super(service);
  }
}
