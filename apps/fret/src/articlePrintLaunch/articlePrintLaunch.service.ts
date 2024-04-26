import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ArticlePrintLaunchServiceBase } from "./base/articlePrintLaunch.service.base";

@Injectable()
export class ArticlePrintLaunchService extends ArticlePrintLaunchServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
