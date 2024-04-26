import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ValidationService } from "./validation.service";
import { ValidationControllerBase } from "./base/validation.controller.base";

@swagger.ApiTags("validations")
@common.Controller("validations")
export class ValidationController extends ValidationControllerBase {
  constructor(
    protected readonly service: ValidationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
