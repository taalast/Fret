import { ValidationWhereInput } from "./ValidationWhereInput";
import { ValidationOrderByInput } from "./ValidationOrderByInput";

export type ValidationFindManyArgs = {
  where?: ValidationWhereInput;
  orderBy?: Array<ValidationOrderByInput>;
  skip?: number;
  take?: number;
};
