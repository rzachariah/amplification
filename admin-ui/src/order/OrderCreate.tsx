import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Amount" source="amount" />
        <NumberInput label="Price" source="price" />
      </SimpleForm>
    </Create>
  );
};
