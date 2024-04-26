import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OperatorModuleBase } from "./base/operator.module.base";
import { OperatorService } from "./operator.service";
import { OperatorController } from "./operator.controller";
import { OperatorGrpcController } from "./operator.grpc.controller";
import { OperatorResolver } from "./operator.resolver";

@Module({
  imports: [OperatorModuleBase, forwardRef(() => AuthModule)],
  controllers: [OperatorController, OperatorGrpcController],
  providers: [OperatorService, OperatorResolver],
  exports: [OperatorService],
})
export class OperatorModule {}
