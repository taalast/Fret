import { DetailedDeclarationArticle as TDetailedDeclarationArticle } from "../api/detailedDeclarationArticle/DetailedDeclarationArticle";

export const DETAILEDDECLARATIONARTICLE_TITLE_FIELD = "id";

export const DetailedDeclarationArticleTitle = (
  record: TDetailedDeclarationArticle
): string => {
  return record.id?.toString() || String(record.id);
};
