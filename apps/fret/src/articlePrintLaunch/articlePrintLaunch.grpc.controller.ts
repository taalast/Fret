import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ArticlePrintLaunchService } from "./articlePrintLaunch.service";
import { ArticlePrintLaunchGrpcControllerBase } from "./base/articlePrintLaunch.grpc.controller.base";

@swagger.ApiTags("articlePrintLaunches")
@common.Controller("articlePrintLaunches")
export class ArticlePrintLaunchGrpcController extends ArticlePrintLaunchGrpcControllerBase {
  constructor(protected readonly service: ArticlePrintLaunchService) {
    super(service);
  }
}
