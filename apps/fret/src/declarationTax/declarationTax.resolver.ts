import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DeclarationTaxResolverBase } from "./base/declarationTax.resolver.base";
import { DeclarationTax } from "./base/DeclarationTax";
import { DeclarationTaxService } from "./declarationTax.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DeclarationTax)
export class DeclarationTaxResolver extends DeclarationTaxResolverBase {
  constructor(
    protected readonly service: DeclarationTaxService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
