import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ValidationServiceBase } from "./base/validation.service.base";

@Injectable()
export class ValidationService extends ValidationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
