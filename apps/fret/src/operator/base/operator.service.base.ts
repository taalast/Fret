/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Operator as PrismaOperator } from "@prisma/client";

export class OperatorServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.OperatorCountArgs, "select">): Promise<number> {
    return this.prisma.operator.count(args);
  }

  async operators<T extends Prisma.OperatorFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OperatorFindManyArgs>
  ): Promise<PrismaOperator[]> {
    return this.prisma.operator.findMany<Prisma.OperatorFindManyArgs>(args);
  }
  async operator<T extends Prisma.OperatorFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OperatorFindUniqueArgs>
  ): Promise<PrismaOperator | null> {
    return this.prisma.operator.findUnique(args);
  }
  async createOperator<T extends Prisma.OperatorCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OperatorCreateArgs>
  ): Promise<PrismaOperator> {
    return this.prisma.operator.create<T>(args);
  }
  async updateOperator<T extends Prisma.OperatorUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OperatorUpdateArgs>
  ): Promise<PrismaOperator> {
    return this.prisma.operator.update<T>(args);
  }
  async deleteOperator<T extends Prisma.OperatorDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OperatorDeleteArgs>
  ): Promise<PrismaOperator> {
    return this.prisma.operator.delete(args);
  }
}
