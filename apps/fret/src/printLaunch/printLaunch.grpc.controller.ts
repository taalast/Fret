import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PrintLaunchService } from "./printLaunch.service";
import { PrintLaunchGrpcControllerBase } from "./base/printLaunch.grpc.controller.base";

@swagger.ApiTags("printLaunches")
@common.Controller("printLaunches")
export class PrintLaunchGrpcController extends PrintLaunchGrpcControllerBase {
  constructor(protected readonly service: PrintLaunchService) {
    super(service);
  }
}
