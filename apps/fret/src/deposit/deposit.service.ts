import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DepositServiceBase } from "./base/deposit.service.base";

@Injectable()
export class DepositService extends DepositServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
