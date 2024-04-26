import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DeclarationValueResolverBase } from "./base/declarationValue.resolver.base";
import { DeclarationValue } from "./base/DeclarationValue";
import { DeclarationValueService } from "./declarationValue.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DeclarationValue)
export class DeclarationValueResolver extends DeclarationValueResolverBase {
  constructor(
    protected readonly service: DeclarationValueService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
