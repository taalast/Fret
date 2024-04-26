import { PrintLaunchWhereInput } from "./PrintLaunchWhereInput";
import { PrintLaunchOrderByInput } from "./PrintLaunchOrderByInput";

export type PrintLaunchFindManyArgs = {
  where?: PrintLaunchWhereInput;
  orderBy?: Array<PrintLaunchOrderByInput>;
  skip?: number;
  take?: number;
};
