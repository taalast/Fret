import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PrintLaunchModuleBase } from "./base/printLaunch.module.base";
import { PrintLaunchService } from "./printLaunch.service";
import { PrintLaunchController } from "./printLaunch.controller";
import { PrintLaunchGrpcController } from "./printLaunch.grpc.controller";
import { PrintLaunchResolver } from "./printLaunch.resolver";

@Module({
  imports: [PrintLaunchModuleBase, forwardRef(() => AuthModule)],
  controllers: [PrintLaunchController, PrintLaunchGrpcController],
  providers: [PrintLaunchService, PrintLaunchResolver],
  exports: [PrintLaunchService],
})
export class PrintLaunchModule {}
