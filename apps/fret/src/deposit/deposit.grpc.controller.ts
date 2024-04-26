import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DepositService } from "./deposit.service";
import { DepositGrpcControllerBase } from "./base/deposit.grpc.controller.base";

@swagger.ApiTags("deposits")
@common.Controller("deposits")
export class DepositGrpcController extends DepositGrpcControllerBase {
  constructor(protected readonly service: DepositService) {
    super(service);
  }
}
