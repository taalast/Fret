import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RawMaterialModuleBase } from "./base/rawMaterial.module.base";
import { RawMaterialService } from "./rawMaterial.service";
import { RawMaterialController } from "./rawMaterial.controller";
import { RawMaterialGrpcController } from "./rawMaterial.grpc.controller";
import { RawMaterialResolver } from "./rawMaterial.resolver";

@Module({
  imports: [RawMaterialModuleBase, forwardRef(() => AuthModule)],
  controllers: [RawMaterialController, RawMaterialGrpcController],
  providers: [RawMaterialService, RawMaterialResolver],
  exports: [RawMaterialService],
})
export class RawMaterialModule {}
