import { Model, model, models, Schema } from "mongoose";

type Category = {
  name: string;
  description: string;
  imageUrl: string;
};

const categorySchema = new Schema<Category>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: false,
      trim: true,
    },
    imageUrl: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const CategoryModel: Model<Category> =
  models.category || model<Category>("Category", categorySchema);
