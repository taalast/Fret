import { DeclarationArticlesEvaluation as TDeclarationArticlesEvaluation } from "../api/declarationArticlesEvaluation/DeclarationArticlesEvaluation";

export const DECLARATIONARTICLESEVALUATION_TITLE_FIELD = "id";

export const DeclarationArticlesEvaluationTitle = (
  record: TDeclarationArticlesEvaluation
): string => {
  return record.id?.toString() || String(record.id);
};
