import { OperatorWhereInput } from "./OperatorWhereInput";
import { OperatorOrderByInput } from "./OperatorOrderByInput";

export type OperatorFindManyArgs = {
  where?: OperatorWhereInput;
  orderBy?: Array<OperatorOrderByInput>;
  skip?: number;
  take?: number;
};
