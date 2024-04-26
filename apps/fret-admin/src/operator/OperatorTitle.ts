import { Operator as TOperator } from "../api/operator/Operator";

export const OPERATOR_TITLE_FIELD = "id";

export const OperatorTitle = (record: TOperator): string => {
  return record.id?.toString() || String(record.id);
};
