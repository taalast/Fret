import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PrintLaunchResolverBase } from "./base/printLaunch.resolver.base";
import { PrintLaunch } from "./base/PrintLaunch";
import { PrintLaunchService } from "./printLaunch.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PrintLaunch)
export class PrintLaunchResolver extends PrintLaunchResolverBase {
  constructor(
    protected readonly service: PrintLaunchService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
