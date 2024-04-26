import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DeclarationTaxService } from "./declarationTax.service";
import { DeclarationTaxControllerBase } from "./base/declarationTax.controller.base";

@swagger.ApiTags("declarationTaxes")
@common.Controller("declarationTaxes")
export class DeclarationTaxController extends DeclarationTaxControllerBase {
  constructor(
    protected readonly service: DeclarationTaxService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
