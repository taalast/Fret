import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DeclarationArticlesEvaluationServiceBase } from "./base/declarationArticlesEvaluation.service.base";

@Injectable()
export class DeclarationArticlesEvaluationService extends DeclarationArticlesEvaluationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
