/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  DetailedDeclarationArticle as PrismaDetailedDeclarationArticle,
} from "@prisma/client";

export class DetailedDeclarationArticleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DetailedDeclarationArticleCountArgs, "select">
  ): Promise<number> {
    return this.prisma.detailedDeclarationArticle.count(args);
  }

  async detailedDeclarationArticles<
    T extends Prisma.DetailedDeclarationArticleFindManyArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.DetailedDeclarationArticleFindManyArgs>
  ): Promise<PrismaDetailedDeclarationArticle[]> {
    return this.prisma.detailedDeclarationArticle.findMany<Prisma.DetailedDeclarationArticleFindManyArgs>(
      args
    );
  }
  async detailedDeclarationArticle<
    T extends Prisma.DetailedDeclarationArticleFindUniqueArgs
  >(
    args: Prisma.SelectSubset<
      T,
      Prisma.DetailedDeclarationArticleFindUniqueArgs
    >
  ): Promise<PrismaDetailedDeclarationArticle | null> {
    return this.prisma.detailedDeclarationArticle.findUnique(args);
  }
  async createDetailedDeclarationArticle<
    T extends Prisma.DetailedDeclarationArticleCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.DetailedDeclarationArticleCreateArgs>
  ): Promise<PrismaDetailedDeclarationArticle> {
    return this.prisma.detailedDeclarationArticle.create<T>(args);
  }
  async updateDetailedDeclarationArticle<
    T extends Prisma.DetailedDeclarationArticleUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.DetailedDeclarationArticleUpdateArgs>
  ): Promise<PrismaDetailedDeclarationArticle> {
    return this.prisma.detailedDeclarationArticle.update<T>(args);
  }
  async deleteDetailedDeclarationArticle<
    T extends Prisma.DetailedDeclarationArticleDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.DetailedDeclarationArticleDeleteArgs>
  ): Promise<PrismaDetailedDeclarationArticle> {
    return this.prisma.detailedDeclarationArticle.delete(args);
  }
}