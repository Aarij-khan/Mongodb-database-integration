import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    place: {type:String,required:true}
  },
  { timestamps: true }
);

export const Product = model("Product", productSchema);