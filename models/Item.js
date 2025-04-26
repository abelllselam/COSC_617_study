import mongoose from "mongoose";

//Blueprint: below we will declare the allowed fields and rules of the schema
const itemSchema = new mongoose.Schema({
  name: { type: String, required: true }, //every item must have a name
  price: { type: Number, required: true }, //and a price
});

//Now we are turning the schema into a class called Item
// We will import item elsewhere
// mongoose will stror/retrieve data in the items collection. Mongoose makes the Item into items (small letter and plural)
const Item = mongoose.model("Item", itemSchema);

export default Item;
