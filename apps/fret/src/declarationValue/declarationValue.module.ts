import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DeclarationValueModuleBase } from "./base/declarationValue.module.base";
import { DeclarationValueService } from "./declarationValue.service";
import { DeclarationValueController } from "./declarationValue.controller";
import { DeclarationValueGrpcController } from "./declarationValue.grpc.controller";
import { DeclarationValueResolver } from "./declarationValue.resolver";

@Module({
  imports: [DeclarationValueModuleBase, forwardRef(() => AuthModule)],
  controllers: [DeclarationValueController, DeclarationValueGrpcController],
  providers: [DeclarationValueService, DeclarationValueResolver],
  exports: [DeclarationValueService],
})
export class DeclarationValueModule {}
