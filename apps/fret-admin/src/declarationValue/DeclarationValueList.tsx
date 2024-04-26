import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DeclarationValueList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DeclarationValues"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Buyer Id" source="buyerId" />
        <TextField label="Contract Date" source="contractDate" />
        <TextField label="Contract Id" source="contractId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Declarant Name" source="declarantName" />
        <TextField label="Declaration Date" source="declarationDate" />
        <TextField label="Declaration Place" source="declarationPlace" />
        <TextField label="ID" source="id" />
        <TextField label="Indirect Value Base" source="indirectValueBase" />
        <TextField label="Invoice Date" source="invoiceDate" />
        <TextField label="Invoice Id" source="invoiceId" />
        <TextField label="Official Mail Date" source="officialMailDate" />
        <TextField label="Official Mail Id" source="officialMailId" />
        <TextField label="Seller Id" source="sellerId" />
        <TextField
          label="Shipping Condition Code"
          source="shippingConditionCode"
        />
        <TextField label="Total Value Base" source="totalValueBase" />
        <TextField
          label="Transactional Value Base"
          source="transactionalValueBase"
        />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
