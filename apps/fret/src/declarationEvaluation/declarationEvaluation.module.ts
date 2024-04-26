import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DeclarationEvaluationModuleBase } from "./base/declarationEvaluation.module.base";
import { DeclarationEvaluationService } from "./declarationEvaluation.service";
import { DeclarationEvaluationController } from "./declarationEvaluation.controller";
import { DeclarationEvaluationGrpcController } from "./declarationEvaluation.grpc.controller";
import { DeclarationEvaluationResolver } from "./declarationEvaluation.resolver";

@Module({
  imports: [DeclarationEvaluationModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    DeclarationEvaluationController,
    DeclarationEvaluationGrpcController,
  ],
  providers: [DeclarationEvaluationService, DeclarationEvaluationResolver],
  exports: [DeclarationEvaluationService],
})
export class DeclarationEvaluationModule {}
