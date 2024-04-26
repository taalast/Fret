import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ArticlePrintLaunchService } from "./articlePrintLaunch.service";
import { ArticlePrintLaunchControllerBase } from "./base/articlePrintLaunch.controller.base";

@swagger.ApiTags("articlePrintLaunches")
@common.Controller("articlePrintLaunches")
export class ArticlePrintLaunchController extends ArticlePrintLaunchControllerBase {
  constructor(
    protected readonly service: ArticlePrintLaunchService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
