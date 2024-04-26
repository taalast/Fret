import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OperatorServiceBase } from "./base/operator.service.base";

@Injectable()
export class OperatorService extends OperatorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
