import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DeclarationTaxServiceBase } from "./base/declarationTax.service.base";

@Injectable()
export class DeclarationTaxService extends DeclarationTaxServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
