import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ValidationService } from "./validation.service";
import { ValidationGrpcControllerBase } from "./base/validation.grpc.controller.base";

@swagger.ApiTags("validations")
@common.Controller("validations")
export class ValidationGrpcController extends ValidationGrpcControllerBase {
  constructor(protected readonly service: ValidationService) {
    super(service);
  }
}
