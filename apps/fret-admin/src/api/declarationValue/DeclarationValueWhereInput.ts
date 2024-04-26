import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DeclarationValueWhereInput = {
  buyerId?: StringNullableFilter;
  contractDate?: DateTimeNullableFilter;
  contractId?: StringNullableFilter;
  declarantName?: StringNullableFilter;
  declarationDate?: DateTimeNullableFilter;
  declarationPlace?: StringNullableFilter;
  id?: StringFilter;
  indirectValueBase?: StringNullableFilter;
  invoiceDate?: DateTimeNullableFilter;
  invoiceId?: StringNullableFilter;
  officialMailDate?: DateTimeNullableFilter;
  officialMailId?: StringNullableFilter;
  sellerId?: StringNullableFilter;
  shippingConditionCode?: StringNullableFilter;
  totalValueBase?: StringNullableFilter;
  transactionalValueBase?: StringNullableFilter;
};
