import React, { useEffect, useState, useRef } from "react";
import { Admin, AuthProvider, DataProvider, Resource } from "react-admin";
import Keycloak from "keycloak-js";
import {
  keycloakClient,
  keycloakAuthProvider,
} from "./auth-provider/ra-auth-keycloak";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { DeclarationValueList } from "./declarationValue/DeclarationValueList";
import { DeclarationValueCreate } from "./declarationValue/DeclarationValueCreate";
import { DeclarationValueEdit } from "./declarationValue/DeclarationValueEdit";
import { DeclarationValueShow } from "./declarationValue/DeclarationValueShow";
import { OperatorList } from "./operator/OperatorList";
import { OperatorCreate } from "./operator/OperatorCreate";
import { OperatorEdit } from "./operator/OperatorEdit";
import { OperatorShow } from "./operator/OperatorShow";
import { DocumentList } from "./document/DocumentList";
import { DocumentCreate } from "./document/DocumentCreate";
import { DocumentEdit } from "./document/DocumentEdit";
import { DocumentShow } from "./document/DocumentShow";
import { PrintLaunchList } from "./printLaunch/PrintLaunchList";
import { PrintLaunchCreate } from "./printLaunch/PrintLaunchCreate";
import { PrintLaunchEdit } from "./printLaunch/PrintLaunchEdit";
import { PrintLaunchShow } from "./printLaunch/PrintLaunchShow";
import { ArticlePrintLaunchList } from "./articlePrintLaunch/ArticlePrintLaunchList";
import { ArticlePrintLaunchCreate } from "./articlePrintLaunch/ArticlePrintLaunchCreate";
import { ArticlePrintLaunchEdit } from "./articlePrintLaunch/ArticlePrintLaunchEdit";
import { ArticlePrintLaunchShow } from "./articlePrintLaunch/ArticlePrintLaunchShow";
import { ValidationList } from "./validation/ValidationList";
import { ValidationCreate } from "./validation/ValidationCreate";
import { ValidationEdit } from "./validation/ValidationEdit";
import { ValidationShow } from "./validation/ValidationShow";
import { DepositList } from "./deposit/DepositList";
import { DepositCreate } from "./deposit/DepositCreate";
import { DepositEdit } from "./deposit/DepositEdit";
import { DepositShow } from "./deposit/DepositShow";
import { ContainerList } from "./container/ContainerList";
import { ContainerCreate } from "./container/ContainerCreate";
import { ContainerEdit } from "./container/ContainerEdit";
import { ContainerShow } from "./container/ContainerShow";
import { DeclarationEvaluationList } from "./declarationEvaluation/DeclarationEvaluationList";
import { DeclarationEvaluationCreate } from "./declarationEvaluation/DeclarationEvaluationCreate";
import { DeclarationEvaluationEdit } from "./declarationEvaluation/DeclarationEvaluationEdit";
import { DeclarationEvaluationShow } from "./declarationEvaluation/DeclarationEvaluationShow";
import { DeclarationTaxList } from "./declarationTax/DeclarationTaxList";
import { DeclarationTaxCreate } from "./declarationTax/DeclarationTaxCreate";
import { DeclarationTaxEdit } from "./declarationTax/DeclarationTaxEdit";
import { DeclarationTaxShow } from "./declarationTax/DeclarationTaxShow";
import { DeclarationArticlesEvaluationList } from "./declarationArticlesEvaluation/DeclarationArticlesEvaluationList";
import { DeclarationArticlesEvaluationCreate } from "./declarationArticlesEvaluation/DeclarationArticlesEvaluationCreate";
import { DeclarationArticlesEvaluationEdit } from "./declarationArticlesEvaluation/DeclarationArticlesEvaluationEdit";
import { DeclarationArticlesEvaluationShow } from "./declarationArticlesEvaluation/DeclarationArticlesEvaluationShow";
import { DetailedDeclarationArticleList } from "./detailedDeclarationArticle/DetailedDeclarationArticleList";
import { DetailedDeclarationArticleCreate } from "./detailedDeclarationArticle/DetailedDeclarationArticleCreate";
import { DetailedDeclarationArticleEdit } from "./detailedDeclarationArticle/DetailedDeclarationArticleEdit";
import { DetailedDeclarationArticleShow } from "./detailedDeclarationArticle/DetailedDeclarationArticleShow";
import { RawMaterialList } from "./rawMaterial/RawMaterialList";
import { RawMaterialCreate } from "./rawMaterial/RawMaterialCreate";
import { RawMaterialEdit } from "./rawMaterial/RawMaterialEdit";
import { RawMaterialShow } from "./rawMaterial/RawMaterialShow";
import { VehicleList } from "./vehicle/VehicleList";
import { VehicleCreate } from "./vehicle/VehicleCreate";
import { VehicleEdit } from "./vehicle/VehicleEdit";
import { VehicleShow } from "./vehicle/VehicleShow";
import { SpecificationList } from "./specification/SpecificationList";
import { SpecificationCreate } from "./specification/SpecificationCreate";
import { SpecificationEdit } from "./specification/SpecificationEdit";
import { SpecificationShow } from "./specification/SpecificationShow";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  const [keycloak, setKeycloak] = useState<Keycloak | null>();
  const authProvider = useRef<AuthProvider | null>();

  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const initKeyCloakClient = async () => {
      await keycloakClient.init({
        onLoad: "login-required",
      });
      authProvider.current = keycloakAuthProvider(keycloakClient, {});
      setKeycloak(keycloakClient);
    };
    if (!keycloak) {
      initKeyCloakClient();
    }
  }, [keycloak]);

  if (!dataProvider || !authProvider.current) {
    return <div>Loading</div>;
  }

  return (
    <div className="App">
      <Admin
        title={"Fret"}
        dataProvider={dataProvider}
        authProvider={authProvider.current}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="DeclarationValue"
          list={DeclarationValueList}
          edit={DeclarationValueEdit}
          create={DeclarationValueCreate}
          show={DeclarationValueShow}
        />
        <Resource
          name="Operator"
          list={OperatorList}
          edit={OperatorEdit}
          create={OperatorCreate}
          show={OperatorShow}
        />
        <Resource
          name="Document"
          list={DocumentList}
          edit={DocumentEdit}
          create={DocumentCreate}
          show={DocumentShow}
        />
        <Resource
          name="PrintLaunch"
          list={PrintLaunchList}
          edit={PrintLaunchEdit}
          create={PrintLaunchCreate}
          show={PrintLaunchShow}
        />
        <Resource
          name="ArticlePrintLaunch"
          list={ArticlePrintLaunchList}
          edit={ArticlePrintLaunchEdit}
          create={ArticlePrintLaunchCreate}
          show={ArticlePrintLaunchShow}
        />
        <Resource
          name="Validation"
          list={ValidationList}
          edit={ValidationEdit}
          create={ValidationCreate}
          show={ValidationShow}
        />
        <Resource
          name="Deposit"
          list={DepositList}
          edit={DepositEdit}
          create={DepositCreate}
          show={DepositShow}
        />
        <Resource
          name="Container"
          list={ContainerList}
          edit={ContainerEdit}
          create={ContainerCreate}
          show={ContainerShow}
        />
        <Resource
          name="DeclarationEvaluation"
          list={DeclarationEvaluationList}
          edit={DeclarationEvaluationEdit}
          create={DeclarationEvaluationCreate}
          show={DeclarationEvaluationShow}
        />
        <Resource
          name="DeclarationTax"
          list={DeclarationTaxList}
          edit={DeclarationTaxEdit}
          create={DeclarationTaxCreate}
          show={DeclarationTaxShow}
        />
        <Resource
          name="DeclarationArticlesEvaluation"
          list={DeclarationArticlesEvaluationList}
          edit={DeclarationArticlesEvaluationEdit}
          create={DeclarationArticlesEvaluationCreate}
          show={DeclarationArticlesEvaluationShow}
        />
        <Resource
          name="DetailedDeclarationArticle"
          list={DetailedDeclarationArticleList}
          edit={DetailedDeclarationArticleEdit}
          create={DetailedDeclarationArticleCreate}
          show={DetailedDeclarationArticleShow}
        />
        <Resource
          name="RawMaterial"
          list={RawMaterialList}
          edit={RawMaterialEdit}
          create={RawMaterialCreate}
          show={RawMaterialShow}
        />
        <Resource
          name="Vehicle"
          list={VehicleList}
          edit={VehicleEdit}
          create={VehicleCreate}
          show={VehicleShow}
        />
        <Resource
          name="Specification"
          list={SpecificationList}
          edit={SpecificationEdit}
          create={SpecificationCreate}
          show={SpecificationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
