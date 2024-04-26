import { SpecificationWhereInput } from "./SpecificationWhereInput";
import { SpecificationOrderByInput } from "./SpecificationOrderByInput";

export type SpecificationFindManyArgs = {
  where?: SpecificationWhereInput;
  orderBy?: Array<SpecificationOrderByInput>;
  skip?: number;
  take?: number;
};
