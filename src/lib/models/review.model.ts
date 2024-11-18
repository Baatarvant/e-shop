import { Model, Schema, model, models } from "mongoose";

type Review = {
  _id: string;
  restaurantId: Schema.Types.ObjectId;
  customerId: Schema.Types.ObjectId;
  rating: number;
  reviewText?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

const reviewSchema = new Schema<Review>(
  {
    restaurantId: {
      type: Schema.Types.ObjectId,
      ref: "restaurants",
      required: true,
    },
    customerId: { type: Schema.Types.ObjectId, ref: "users", required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    reviewText: { type: String },
  },
  { timestamps: true }
);

export const ReviewModel: Model<Review> =
  models.reviews || model<Review>("reviews", reviewSchema);
