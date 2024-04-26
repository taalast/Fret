import { SortOrder } from "../../util/SortOrder";

export type DeclarationValueOrderByInput = {
  buyerId?: SortOrder;
  contractDate?: SortOrder;
  contractId?: SortOrder;
  createdAt?: SortOrder;
  declarantName?: SortOrder;
  declarationDate?: SortOrder;
  declarationPlace?: SortOrder;
  id?: SortOrder;
  indirectValueBase?: SortOrder;
  invoiceDate?: SortOrder;
  invoiceId?: SortOrder;
  officialMailDate?: SortOrder;
  officialMailId?: SortOrder;
  sellerId?: SortOrder;
  shippingConditionCode?: SortOrder;
  totalValueBase?: SortOrder;
  transactionalValueBase?: SortOrder;
  updatedAt?: SortOrder;
};
