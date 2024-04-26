import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DetailedDeclarationArticleService } from "./detailedDeclarationArticle.service";
import { DetailedDeclarationArticleControllerBase } from "./base/detailedDeclarationArticle.controller.base";

@swagger.ApiTags("detailedDeclarationArticles")
@common.Controller("detailedDeclarationArticles")
export class DetailedDeclarationArticleController extends DetailedDeclarationArticleControllerBase {
  constructor(
    protected readonly service: DetailedDeclarationArticleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
