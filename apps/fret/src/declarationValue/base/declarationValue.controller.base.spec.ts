import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { DeclarationValueController } from "../declarationValue.controller";
import { DeclarationValueService } from "../declarationValue.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  buyerId: "exampleBuyerId",
  contractDate: new Date(),
  contractId: "exampleContractId",
  createdAt: new Date(),
  declarantName: "exampleDeclarantName",
  declarationDate: new Date(),
  declarationPlace: "exampleDeclarationPlace",
  id: "exampleId",
  indirectValueBase: "exampleIndirectValueBase",
  invoiceDate: new Date(),
  invoiceId: "exampleInvoiceId",
  officialMailDate: new Date(),
  officialMailId: "exampleOfficialMailId",
  sellerId: "exampleSellerId",
  shippingConditionCode: "exampleShippingConditionCode",
  totalValueBase: "exampleTotalValueBase",
  transactionalValueBase: "exampleTransactionalValueBase",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  buyerId: "exampleBuyerId",
  contractDate: new Date(),
  contractId: "exampleContractId",
  createdAt: new Date(),
  declarantName: "exampleDeclarantName",
  declarationDate: new Date(),
  declarationPlace: "exampleDeclarationPlace",
  id: "exampleId",
  indirectValueBase: "exampleIndirectValueBase",
  invoiceDate: new Date(),
  invoiceId: "exampleInvoiceId",
  officialMailDate: new Date(),
  officialMailId: "exampleOfficialMailId",
  sellerId: "exampleSellerId",
  shippingConditionCode: "exampleShippingConditionCode",
  totalValueBase: "exampleTotalValueBase",
  transactionalValueBase: "exampleTransactionalValueBase",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    buyerId: "exampleBuyerId",
    contractDate: new Date(),
    contractId: "exampleContractId",
    createdAt: new Date(),
    declarantName: "exampleDeclarantName",
    declarationDate: new Date(),
    declarationPlace: "exampleDeclarationPlace",
    id: "exampleId",
    indirectValueBase: "exampleIndirectValueBase",
    invoiceDate: new Date(),
    invoiceId: "exampleInvoiceId",
    officialMailDate: new Date(),
    officialMailId: "exampleOfficialMailId",
    sellerId: "exampleSellerId",
    shippingConditionCode: "exampleShippingConditionCode",
    totalValueBase: "exampleTotalValueBase",
    transactionalValueBase: "exampleTransactionalValueBase",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  buyerId: "exampleBuyerId",
  contractDate: new Date(),
  contractId: "exampleContractId",
  createdAt: new Date(),
  declarantName: "exampleDeclarantName",
  declarationDate: new Date(),
  declarationPlace: "exampleDeclarationPlace",
  id: "exampleId",
  indirectValueBase: "exampleIndirectValueBase",
  invoiceDate: new Date(),
  invoiceId: "exampleInvoiceId",
  officialMailDate: new Date(),
  officialMailId: "exampleOfficialMailId",
  sellerId: "exampleSellerId",
  shippingConditionCode: "exampleShippingConditionCode",
  totalValueBase: "exampleTotalValueBase",
  transactionalValueBase: "exampleTransactionalValueBase",
  updatedAt: new Date(),
};

const service = {
  createDeclarationValue() {
    return CREATE_RESULT;
  },
  declarationValues: () => FIND_MANY_RESULT,
  declarationValue: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("DeclarationValue", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DeclarationValueService,
          useValue: service,
        },
      ],
      controllers: [DeclarationValueController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /declarationValues", async () => {
    await request(app.getHttpServer())
      .post("/declarationValues")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        contractDate: CREATE_RESULT.contractDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        declarationDate: CREATE_RESULT.declarationDate.toISOString(),
        invoiceDate: CREATE_RESULT.invoiceDate.toISOString(),
        officialMailDate: CREATE_RESULT.officialMailDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /declarationValues", async () => {
    await request(app.getHttpServer())
      .get("/declarationValues")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          contractDate: FIND_MANY_RESULT[0].contractDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          declarationDate: FIND_MANY_RESULT[0].declarationDate.toISOString(),
          invoiceDate: FIND_MANY_RESULT[0].invoiceDate.toISOString(),
          officialMailDate: FIND_MANY_RESULT[0].officialMailDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /declarationValues/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/declarationValues"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /declarationValues/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/declarationValues"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        contractDate: FIND_ONE_RESULT.contractDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        declarationDate: FIND_ONE_RESULT.declarationDate.toISOString(),
        invoiceDate: FIND_ONE_RESULT.invoiceDate.toISOString(),
        officialMailDate: FIND_ONE_RESULT.officialMailDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /declarationValues existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/declarationValues")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        contractDate: CREATE_RESULT.contractDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        declarationDate: CREATE_RESULT.declarationDate.toISOString(),
        invoiceDate: CREATE_RESULT.invoiceDate.toISOString(),
        officialMailDate: CREATE_RESULT.officialMailDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/declarationValues")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
