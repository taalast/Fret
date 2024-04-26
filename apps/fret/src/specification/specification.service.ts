import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SpecificationServiceBase } from "./base/specification.service.base";

@Injectable()
export class SpecificationService extends SpecificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
