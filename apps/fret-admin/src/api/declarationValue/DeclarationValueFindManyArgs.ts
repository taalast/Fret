import { DeclarationValueWhereInput } from "./DeclarationValueWhereInput";
import { DeclarationValueOrderByInput } from "./DeclarationValueOrderByInput";

export type DeclarationValueFindManyArgs = {
  where?: DeclarationValueWhereInput;
  orderBy?: Array<DeclarationValueOrderByInput>;
  skip?: number;
  take?: number;
};
