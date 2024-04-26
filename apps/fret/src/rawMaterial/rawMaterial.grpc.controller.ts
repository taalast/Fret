import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RawMaterialService } from "./rawMaterial.service";
import { RawMaterialGrpcControllerBase } from "./base/rawMaterial.grpc.controller.base";

@swagger.ApiTags("rawMaterials")
@common.Controller("rawMaterials")
export class RawMaterialGrpcController extends RawMaterialGrpcControllerBase {
  constructor(protected readonly service: RawMaterialService) {
    super(service);
  }
}
