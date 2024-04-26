import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DeclarationEvaluationService } from "./declarationEvaluation.service";
import { DeclarationEvaluationGrpcControllerBase } from "./base/declarationEvaluation.grpc.controller.base";

@swagger.ApiTags("declarationEvaluations")
@common.Controller("declarationEvaluations")
export class DeclarationEvaluationGrpcController extends DeclarationEvaluationGrpcControllerBase {
  constructor(protected readonly service: DeclarationEvaluationService) {
    super(service);
  }
}
