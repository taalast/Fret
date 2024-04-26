import { PrintLaunch as TPrintLaunch } from "../api/printLaunch/PrintLaunch";

export const PRINTLAUNCH_TITLE_FIELD = "id";

export const PrintLaunchTitle = (record: TPrintLaunch): string => {
  return record.id?.toString() || String(record.id);
};
