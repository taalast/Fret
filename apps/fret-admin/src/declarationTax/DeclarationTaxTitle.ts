import { DeclarationTax as TDeclarationTax } from "../api/declarationTax/DeclarationTax";

export const DECLARATIONTAX_TITLE_FIELD = "id";

export const DeclarationTaxTitle = (record: TDeclarationTax): string => {
  return record.id?.toString() || String(record.id);
};
