import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VehicleModuleBase } from "./base/vehicle.module.base";
import { VehicleService } from "./vehicle.service";
import { VehicleController } from "./vehicle.controller";
import { VehicleGrpcController } from "./vehicle.grpc.controller";
import { VehicleResolver } from "./vehicle.resolver";

@Module({
  imports: [VehicleModuleBase, forwardRef(() => AuthModule)],
  controllers: [VehicleController, VehicleGrpcController],
  providers: [VehicleService, VehicleResolver],
  exports: [VehicleService],
})
export class VehicleModule {}
