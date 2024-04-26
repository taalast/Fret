import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DocumentService } from "./document.service";
import { DocumentGrpcControllerBase } from "./base/document.grpc.controller.base";

@swagger.ApiTags("documents")
@common.Controller("documents")
export class DocumentGrpcController extends DocumentGrpcControllerBase {
  constructor(protected readonly service: DocumentService) {
    super(service);
  }
}
