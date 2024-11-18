import { Model, Schema, model, models } from "mongoose";

type Promotion = {
  _id: string;
  code: string;
  restaurantId: Schema.Types.ObjectId;
  discountPercentage: number;
  expiryDate: Date;
  createdAt?: Date;
  updatedAt?: Date;
};

const promotionSchema = new Schema<Promotion>(
  {
    code: { type: String, required: true, unique: true },
    restaurantId: { type: Schema.Types.ObjectId, ref: "users", required: true },
    discountPercentage: { type: Number, required: true, min: 0, max: 100 },
    expiryDate: { type: Date, required: true },
  },
  { timestamps: true }
);

export const PromotionModel: Model<Promotion> =
  models.promotions || model<Promotion>("promotions", promotionSchema);
