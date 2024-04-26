import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DeclarationValueServiceBase } from "./base/declarationValue.service.base";

@Injectable()
export class DeclarationValueService extends DeclarationValueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
