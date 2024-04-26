import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DeclarationEvaluationServiceBase } from "./base/declarationEvaluation.service.base";

@Injectable()
export class DeclarationEvaluationService extends DeclarationEvaluationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
