import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SpecificationService } from "./specification.service";
import { SpecificationGrpcControllerBase } from "./base/specification.grpc.controller.base";

@swagger.ApiTags("specifications")
@common.Controller("specifications")
export class SpecificationGrpcController extends SpecificationGrpcControllerBase {
  constructor(protected readonly service: SpecificationService) {
    super(service);
  }
}
