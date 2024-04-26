import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const DeclarationValueCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Buyer Id" source="buyerId" />
        <DateTimeInput label="Contract Date" source="contractDate" />
        <TextInput label="Contract Id" source="contractId" />
        <TextInput label="Declarant Name" source="declarantName" />
        <DateTimeInput label="Declaration Date" source="declarationDate" />
        <TextInput label="Declaration Place" source="declarationPlace" />
        <TextInput label="Indirect Value Base" source="indirectValueBase" />
        <DateTimeInput label="Invoice Date" source="invoiceDate" />
        <TextInput label="Invoice Id" source="invoiceId" />
        <DateTimeInput label="Official Mail Date" source="officialMailDate" />
        <TextInput label="Official Mail Id" source="officialMailId" />
        <TextInput label="Seller Id" source="sellerId" />
        <TextInput
          label="Shipping Condition Code"
          source="shippingConditionCode"
        />
        <TextInput label="Total Value Base" source="totalValueBase" />
        <TextInput
          label="Transactional Value Base"
          source="transactionalValueBase"
        />
      </SimpleForm>
    </Create>
  );
};
