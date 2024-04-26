import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RawMaterialResolverBase } from "./base/rawMaterial.resolver.base";
import { RawMaterial } from "./base/RawMaterial";
import { RawMaterialService } from "./rawMaterial.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RawMaterial)
export class RawMaterialResolver extends RawMaterialResolverBase {
  constructor(
    protected readonly service: RawMaterialService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
