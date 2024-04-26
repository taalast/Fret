import { Validation as TValidation } from "../api/validation/Validation";

export const VALIDATION_TITLE_FIELD = "id";

export const ValidationTitle = (record: TValidation): string => {
  return record.id?.toString() || String(record.id);
};
