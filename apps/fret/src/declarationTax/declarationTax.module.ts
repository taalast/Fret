import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DeclarationTaxModuleBase } from "./base/declarationTax.module.base";
import { DeclarationTaxService } from "./declarationTax.service";
import { DeclarationTaxController } from "./declarationTax.controller";
import { DeclarationTaxGrpcController } from "./declarationTax.grpc.controller";
import { DeclarationTaxResolver } from "./declarationTax.resolver";

@Module({
  imports: [DeclarationTaxModuleBase, forwardRef(() => AuthModule)],
  controllers: [DeclarationTaxController, DeclarationTaxGrpcController],
  providers: [DeclarationTaxService, DeclarationTaxResolver],
  exports: [DeclarationTaxService],
})
export class DeclarationTaxModule {}
