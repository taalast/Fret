import { ArticlePrintLaunch as TArticlePrintLaunch } from "../api/articlePrintLaunch/ArticlePrintLaunch";

export const ARTICLEPRINTLAUNCH_TITLE_FIELD = "id";

export const ArticlePrintLaunchTitle = (
  record: TArticlePrintLaunch
): string => {
  return record.id?.toString() || String(record.id);
};
