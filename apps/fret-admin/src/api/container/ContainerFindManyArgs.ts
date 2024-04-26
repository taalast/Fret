import { ContainerWhereInput } from "./ContainerWhereInput";
import { ContainerOrderByInput } from "./ContainerOrderByInput";

export type ContainerFindManyArgs = {
  where?: ContainerWhereInput;
  orderBy?: Array<ContainerOrderByInput>;
  skip?: number;
  take?: number;
};
