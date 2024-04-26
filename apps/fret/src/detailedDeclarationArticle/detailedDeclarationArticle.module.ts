import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DetailedDeclarationArticleModuleBase } from "./base/detailedDeclarationArticle.module.base";
import { DetailedDeclarationArticleService } from "./detailedDeclarationArticle.service";
import { DetailedDeclarationArticleController } from "./detailedDeclarationArticle.controller";
import { DetailedDeclarationArticleGrpcController } from "./detailedDeclarationArticle.grpc.controller";
import { DetailedDeclarationArticleResolver } from "./detailedDeclarationArticle.resolver";

@Module({
  imports: [DetailedDeclarationArticleModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    DetailedDeclarationArticleController,
    DetailedDeclarationArticleGrpcController,
  ],
  providers: [
    DetailedDeclarationArticleService,
    DetailedDeclarationArticleResolver,
  ],
  exports: [DetailedDeclarationArticleService],
})
export class DetailedDeclarationArticleModule {}
