import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PrintLaunchService } from "./printLaunch.service";
import { PrintLaunchControllerBase } from "./base/printLaunch.controller.base";

@swagger.ApiTags("printLaunches")
@common.Controller("printLaunches")
export class PrintLaunchController extends PrintLaunchControllerBase {
  constructor(
    protected readonly service: PrintLaunchService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
