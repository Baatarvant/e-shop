import { Model, Schema, model, models } from "mongoose";

type Menu = {
  _id: string;
  restaurantId: string;
  name: string;
  price: string;
  description: string;
  isAvailable: boolean;
};

const MenuSchema = new Schema<Menu>(
  {
    restaurantId: { type: String, ref: "users", required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    isAvailable: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export const MenuModel: Model<Menu> =
  models.menu || model<Menu>("menu", MenuSchema);
