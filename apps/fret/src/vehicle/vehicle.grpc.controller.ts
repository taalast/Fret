import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VehicleService } from "./vehicle.service";
import { VehicleGrpcControllerBase } from "./base/vehicle.grpc.controller.base";

@swagger.ApiTags("vehicles")
@common.Controller("vehicles")
export class VehicleGrpcController extends VehicleGrpcControllerBase {
  constructor(protected readonly service: VehicleService) {
    super(service);
  }
}
