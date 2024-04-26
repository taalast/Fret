import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DeclarationValueService } from "./declarationValue.service";
import { DeclarationValueGrpcControllerBase } from "./base/declarationValue.grpc.controller.base";

@swagger.ApiTags("declarationValues")
@common.Controller("declarationValues")
export class DeclarationValueGrpcController extends DeclarationValueGrpcControllerBase {
  constructor(protected readonly service: DeclarationValueService) {
    super(service);
  }
}
