import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OperatorService } from "./operator.service";
import { OperatorGrpcControllerBase } from "./base/operator.grpc.controller.base";

@swagger.ApiTags("operators")
@common.Controller("operators")
export class OperatorGrpcController extends OperatorGrpcControllerBase {
  constructor(protected readonly service: OperatorService) {
    super(service);
  }
}
