import { Module } from "@nestjs/common";

import {
  OpenTelemetryModule,
  PipeInjector,
  ControllerInjector,
  EventEmitterInjector,
  GraphQLResolverInjector,
  GuardInjector,
} from "@amplication/opentelemetry-nestjs";

import { HttpInstrumentation } from "@opentelemetry/instrumentation-http";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-grpc";
import { BatchSpanProcessor } from "@opentelemetry/sdk-trace-node";
import { UserModule } from "./user/user.module";
import { DeclarationValueModule } from "./declarationValue/declarationValue.module";
import { OperatorModule } from "./operator/operator.module";
import { DocumentModule } from "./document/document.module";
import { PrintLaunchModule } from "./printLaunch/printLaunch.module";
import { ArticlePrintLaunchModule } from "./articlePrintLaunch/articlePrintLaunch.module";
import { ValidationModule } from "./validation/validation.module";
import { DepositModule } from "./deposit/deposit.module";
import { ContainerModule } from "./container/container.module";
import { DeclarationEvaluationModule } from "./declarationEvaluation/declarationEvaluation.module";
import { DeclarationTaxModule } from "./declarationTax/declarationTax.module";
import { DeclarationArticlesEvaluationModule } from "./declarationArticlesEvaluation/declarationArticlesEvaluation.module";
import { DetailedDeclarationArticleModule } from "./detailedDeclarationArticle/detailedDeclarationArticle.module";
import { RawMaterialModule } from "./rawMaterial/rawMaterial.module";
import { VehicleModule } from "./vehicle/vehicle.module";
import { SpecificationModule } from "./specification/specification.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { NatsModule } from "./nats/nats.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

import { LoggerModule } from "./logger/logger.module";

@Module({
  controllers: [],
  imports: [
    NatsModule,
    LoggerModule,
    ACLModule,
    AuthModule,
    UserModule,
    DeclarationValueModule,
    OperatorModule,
    DocumentModule,
    PrintLaunchModule,
    ArticlePrintLaunchModule,
    ValidationModule,
    DepositModule,
    ContainerModule,
    DeclarationEvaluationModule,
    DeclarationTaxModule,
    DeclarationArticlesEvaluationModule,
    DetailedDeclarationArticleModule,
    RawMaterialModule,
    VehicleModule,
    SpecificationModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
    OpenTelemetryModule.forRoot({
      serviceName: "Fret",
      spanProcessor: new BatchSpanProcessor(new OTLPTraceExporter()),
      instrumentations: [
        new HttpInstrumentation({
          requestHook: (span, request) => {
            if (request.method)
              span.setAttribute("http.method", request.method);
          },
        }),
      ],

      traceAutoInjectors: [
        ControllerInjector,
        EventEmitterInjector,
        GraphQLResolverInjector,
        GuardInjector,
        PipeInjector,
      ],
    }),
  ],
  providers: [],
})
export class AppModule {}
