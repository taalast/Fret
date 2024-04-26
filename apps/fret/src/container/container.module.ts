import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ContainerModuleBase } from "./base/container.module.base";
import { ContainerService } from "./container.service";
import { ContainerController } from "./container.controller";
import { ContainerGrpcController } from "./container.grpc.controller";
import { ContainerResolver } from "./container.resolver";

@Module({
  imports: [ContainerModuleBase, forwardRef(() => AuthModule)],
  controllers: [ContainerController, ContainerGrpcController],
  providers: [ContainerService, ContainerResolver],
  exports: [ContainerService],
})
export class ContainerModule {}
