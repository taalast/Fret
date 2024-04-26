import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SpecificationModuleBase } from "./base/specification.module.base";
import { SpecificationService } from "./specification.service";
import { SpecificationController } from "./specification.controller";
import { SpecificationGrpcController } from "./specification.grpc.controller";
import { SpecificationResolver } from "./specification.resolver";

@Module({
  imports: [SpecificationModuleBase, forwardRef(() => AuthModule)],
  controllers: [SpecificationController, SpecificationGrpcController],
  providers: [SpecificationService, SpecificationResolver],
  exports: [SpecificationService],
})
export class SpecificationModule {}
