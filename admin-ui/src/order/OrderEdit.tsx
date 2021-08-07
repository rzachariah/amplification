import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Amount" source="amount" />
        <NumberInput label="Price" source="price" />
      </SimpleForm>
    </Edit>
  );
};
