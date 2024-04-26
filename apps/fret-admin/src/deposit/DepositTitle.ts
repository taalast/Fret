import { Deposit as TDeposit } from "../api/deposit/Deposit";

export const DEPOSIT_TITLE_FIELD = "id";

export const DepositTitle = (record: TDeposit): string => {
  return record.id?.toString() || String(record.id);
};
