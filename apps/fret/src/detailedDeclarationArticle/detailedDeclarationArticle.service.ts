import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DetailedDeclarationArticleServiceBase } from "./base/detailedDeclarationArticle.service.base";

@Injectable()
export class DetailedDeclarationArticleService extends DetailedDeclarationArticleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
