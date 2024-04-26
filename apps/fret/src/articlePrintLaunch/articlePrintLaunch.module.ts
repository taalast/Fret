import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ArticlePrintLaunchModuleBase } from "./base/articlePrintLaunch.module.base";
import { ArticlePrintLaunchService } from "./articlePrintLaunch.service";
import { ArticlePrintLaunchController } from "./articlePrintLaunch.controller";
import { ArticlePrintLaunchGrpcController } from "./articlePrintLaunch.grpc.controller";
import { ArticlePrintLaunchResolver } from "./articlePrintLaunch.resolver";

@Module({
  imports: [ArticlePrintLaunchModuleBase, forwardRef(() => AuthModule)],
  controllers: [ArticlePrintLaunchController, ArticlePrintLaunchGrpcController],
  providers: [ArticlePrintLaunchService, ArticlePrintLaunchResolver],
  exports: [ArticlePrintLaunchService],
})
export class ArticlePrintLaunchModule {}
