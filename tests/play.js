import Item from "../models/Item.js";
import * as dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

(async () => {
  // 1️⃣ connect (give Atlas up to 30 s to wake up)
  await mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 30000, //sets how long it will wait for that handshake to succeed before throwing MongooseServerSelectionError.Free or sleepy Atlas clusters sometimes take longer than the default (10 s), so bumping it to 30 s prevents premature timeouts.
  });

  // 2️⃣ CREATE one document
  const saved = await Item.create({ name: "AW coffee", price: 10 });
  console.log("Saved:", saved);

  const updatedItem = await Item.updateOne(
    { _id: "680d4861c321dc0121dd1c65" },
    {
      name: "Changed from AW coffee",
      price: 20,
    }
  );

  console.log("This is update: ", updatedItem);

  // 3️⃣ READ them all back
  const all = await Item.find();
  console.log("All items:", all);

  // 5️⃣ DELETE one document (replace id with the real one you want gone)
  await Item.deleteOne({ _id: "680d4861c321dc0121dd1c65" });
  console.log("Deleted.");

  // (optional) verify it’s gone
  const check = await Item.findById("680d50b6a6381bd80ebd0315");
  console.log("Should be null:", check);

  // 4️⃣ disconnect so Node exits
  await mongoose.disconnect();
})().catch(console.error); //(async () => { /* ... */ })
//Creates an anonymous async function but doesn’t run it yet.The trailing () immediately afterward
//... })()  → invokes that function right away and returns its Promise.
