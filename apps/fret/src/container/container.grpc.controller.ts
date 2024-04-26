import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContainerService } from "./container.service";
import { ContainerGrpcControllerBase } from "./base/container.grpc.controller.base";

@swagger.ApiTags("containers")
@common.Controller("containers")
export class ContainerGrpcController extends ContainerGrpcControllerBase {
  constructor(protected readonly service: ContainerService) {
    super(service);
  }
}
