import { Model, Schema, Types, model, models } from "mongoose";

type Address = {
  _id: string;
  userId: Types.ObjectId;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  createdAt?: Date;
  updatedAt?: Date;
};

const addressSchema = new Schema<Address>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "users", required: true },
    streetAddress: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
  },
  { timestamps: true }
);

export const AddressModel: Model<Address> =
  models.addresses || model<Address>("addresses", addressSchema);
