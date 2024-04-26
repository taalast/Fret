import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RawMaterialService } from "./rawMaterial.service";
import { RawMaterialControllerBase } from "./base/rawMaterial.controller.base";

@swagger.ApiTags("rawMaterials")
@common.Controller("rawMaterials")
export class RawMaterialController extends RawMaterialControllerBase {
  constructor(
    protected readonly service: RawMaterialService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
