import { Model, Schema, model, models } from "mongoose";

type Restaurant = {
  _id: string;
  ownerId: string;
  name: string;
  location: string;
  rating: string;
};

const RestaurantSchema = new Schema<Restaurant>(
  {
    ownerId: { type: String, ref: "users", required: true },
    name: { type: String, required: true },
    location: { type: String, ref: "locations", required: true },
    rating: { type: String, required: true },
  },
  { timestamps: true }
);

export const RestaurantModel: Model<Restaurant> =
  models.restaurant || model<Restaurant>("restaurant", RestaurantSchema);
