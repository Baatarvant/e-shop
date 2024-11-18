import { Model, model, models, Schema, Types } from "mongoose";

type OrderItem = {
  _id: string;
  orderId: Schema.Types.ObjectId;
  menuId: Types.ObjectId;
  quantity: number;
  price: number;
};

const orderItemSchema = new Schema<OrderItem>(
  {
    orderId: { type: Types.ObjectId, ref: "orders", required: true },
    menuId: { type: Schema.Types.ObjectId, ref: "menus", required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

export const OrderItemModel: Model<OrderItem> =
  models.orderItems || model<OrderItem>("orderItems", orderItemSchema);
