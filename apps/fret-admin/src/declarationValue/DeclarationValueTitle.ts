import { DeclarationValue as TDeclarationValue } from "../api/declarationValue/DeclarationValue";

export const DECLARATIONVALUE_TITLE_FIELD = "declarantName";

export const DeclarationValueTitle = (record: TDeclarationValue): string => {
  return record.declarantName?.toString() || String(record.id);
};
