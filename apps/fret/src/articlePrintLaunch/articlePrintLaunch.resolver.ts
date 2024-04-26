import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ArticlePrintLaunchResolverBase } from "./base/articlePrintLaunch.resolver.base";
import { ArticlePrintLaunch } from "./base/ArticlePrintLaunch";
import { ArticlePrintLaunchService } from "./articlePrintLaunch.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ArticlePrintLaunch)
export class ArticlePrintLaunchResolver extends ArticlePrintLaunchResolverBase {
  constructor(
    protected readonly service: ArticlePrintLaunchService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
