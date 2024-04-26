import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DeclarationTaxService } from "./declarationTax.service";
import { DeclarationTaxGrpcControllerBase } from "./base/declarationTax.grpc.controller.base";

@swagger.ApiTags("declarationTaxes")
@common.Controller("declarationTaxes")
export class DeclarationTaxGrpcController extends DeclarationTaxGrpcControllerBase {
  constructor(protected readonly service: DeclarationTaxService) {
    super(service);
  }
}
