import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DepositModuleBase } from "./base/deposit.module.base";
import { DepositService } from "./deposit.service";
import { DepositController } from "./deposit.controller";
import { DepositGrpcController } from "./deposit.grpc.controller";
import { DepositResolver } from "./deposit.resolver";

@Module({
  imports: [DepositModuleBase, forwardRef(() => AuthModule)],
  controllers: [DepositController, DepositGrpcController],
  providers: [DepositService, DepositResolver],
  exports: [DepositService],
})
export class DepositModule {}
