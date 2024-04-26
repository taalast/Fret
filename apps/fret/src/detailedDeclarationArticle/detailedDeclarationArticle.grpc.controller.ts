import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DetailedDeclarationArticleService } from "./detailedDeclarationArticle.service";
import { DetailedDeclarationArticleGrpcControllerBase } from "./base/detailedDeclarationArticle.grpc.controller.base";

@swagger.ApiTags("detailedDeclarationArticles")
@common.Controller("detailedDeclarationArticles")
export class DetailedDeclarationArticleGrpcController extends DetailedDeclarationArticleGrpcControllerBase {
  constructor(protected readonly service: DetailedDeclarationArticleService) {
    super(service);
  }
}
