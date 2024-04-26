import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DeclarationArticlesEvaluationModuleBase } from "./base/declarationArticlesEvaluation.module.base";
import { DeclarationArticlesEvaluationService } from "./declarationArticlesEvaluation.service";
import { DeclarationArticlesEvaluationController } from "./declarationArticlesEvaluation.controller";
import { DeclarationArticlesEvaluationGrpcController } from "./declarationArticlesEvaluation.grpc.controller";
import { DeclarationArticlesEvaluationResolver } from "./declarationArticlesEvaluation.resolver";

@Module({
  imports: [
    DeclarationArticlesEvaluationModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [
    DeclarationArticlesEvaluationController,
    DeclarationArticlesEvaluationGrpcController,
  ],
  providers: [
    DeclarationArticlesEvaluationService,
    DeclarationArticlesEvaluationResolver,
  ],
  exports: [DeclarationArticlesEvaluationService],
})
export class DeclarationArticlesEvaluationModule {}
