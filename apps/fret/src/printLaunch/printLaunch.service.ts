import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PrintLaunchServiceBase } from "./base/printLaunch.service.base";

@Injectable()
export class PrintLaunchService extends PrintLaunchServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
