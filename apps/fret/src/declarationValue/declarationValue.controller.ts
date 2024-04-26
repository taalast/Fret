import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DeclarationValueService } from "./declarationValue.service";
import { DeclarationValueControllerBase } from "./base/declarationValue.controller.base";

@swagger.ApiTags("declarationValues")
@common.Controller("declarationValues")
export class DeclarationValueController extends DeclarationValueControllerBase {
  constructor(
    protected readonly service: DeclarationValueService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
