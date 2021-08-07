import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type OrderWhereInput = {
  amount?: IntFilter;
  id?: StringFilter;
  price?: FloatFilter;
};
