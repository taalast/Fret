import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ValidationModuleBase } from "./base/validation.module.base";
import { ValidationService } from "./validation.service";
import { ValidationController } from "./validation.controller";
import { ValidationGrpcController } from "./validation.grpc.controller";
import { ValidationResolver } from "./validation.resolver";

@Module({
  imports: [ValidationModuleBase, forwardRef(() => AuthModule)],
  controllers: [ValidationController, ValidationGrpcController],
  providers: [ValidationService, ValidationResolver],
  exports: [ValidationService],
})
export class ValidationModule {}
