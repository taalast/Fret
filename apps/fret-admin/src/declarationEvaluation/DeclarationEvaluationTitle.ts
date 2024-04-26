import { DeclarationEvaluation as TDeclarationEvaluation } from "../api/declarationEvaluation/DeclarationEvaluation";

export const DECLARATIONEVALUATION_TITLE_FIELD = "id";

export const DeclarationEvaluationTitle = (
  record: TDeclarationEvaluation
): string => {
  return record.id?.toString() || String(record.id);
};
