import { model, Model, models, Schema } from "mongoose";

type Order = {
  _id: string;
  customerId: Schema.Types.ObjectId;
  restaurantId: Schema.Types.ObjectId;
  status: "Pending" | "InProgress" | "Delivered";
  totalAmount: number;
  deliveryId?: Schema.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
};

const orderSchema = new Schema<Order>(
  {
    customerId: { type: Schema.Types.ObjectId, ref: "users", required: true },
    restaurantId: {
      type: Schema.Types.ObjectId,
      ref: "restaurants",
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["Pending", "InProgress", "Delivered"],
      default: "Pending",
    },
    totalAmount: { type: Number, required: true },
    deliveryId: { type: Schema.Types.ObjectId, ref: "deliveries" },
  },
  { timestamps: true }
);

export const OrderModel: Model<Order> =
  models.orders || model<Order>("orders", orderSchema);
