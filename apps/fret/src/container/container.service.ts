import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContainerServiceBase } from "./base/container.service.base";

@Injectable()
export class ContainerService extends ContainerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
