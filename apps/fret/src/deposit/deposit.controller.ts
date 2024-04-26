import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DepositService } from "./deposit.service";
import { DepositControllerBase } from "./base/deposit.controller.base";

@swagger.ApiTags("deposits")
@common.Controller("deposits")
export class DepositController extends DepositControllerBase {
  constructor(
    protected readonly service: DepositService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
