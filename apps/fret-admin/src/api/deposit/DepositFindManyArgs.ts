import { DepositWhereInput } from "./DepositWhereInput";
import { DepositOrderByInput } from "./DepositOrderByInput";

export type DepositFindManyArgs = {
  where?: DepositWhereInput;
  orderBy?: Array<DepositOrderByInput>;
  skip?: number;
  take?: number;
};
