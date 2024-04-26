import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: [
      "user",
      "declarationvalue",
      "operator",
      "document",
      "printlaunch",
      "articleprintlaunch",
      "validation",
      "deposit",
      "container",
      "declarationevaluation",
      "declarationtax",
      "declarationarticlesevaluation",
      "detaileddeclarationarticle",
      "rawmaterial",
      "vehicle",
      "specification"
    ],
    protoPath: [
      "src/user/user.proto",
      "src/declarationvalue/declarationvalue.proto",
      "src/operator/operator.proto",
      "src/document/document.proto",
      "src/printlaunch/printlaunch.proto",
      "src/articleprintlaunch/articleprintlaunch.proto",
      "src/validation/validation.proto",
      "src/deposit/deposit.proto",
      "src/container/container.proto",
      "src/declarationevaluation/declarationevaluation.proto",
      "src/declarationtax/declarationtax.proto",
      "src/declarationarticlesevaluation/declarationarticlesevaluation.proto",
      "src/detaileddeclarationarticle/detaileddeclarationarticle.proto",
      "src/rawmaterial/rawmaterial.proto",
      "src/vehicle/vehicle.proto",
      "src/specification/specification.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
