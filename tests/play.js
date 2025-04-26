import Item from "../models/Item.js";
import * as dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

(async () => {
  // 1️⃣ connect (give Atlas up to 30 s to wake up)
  await mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 30000,
  });

  // 2️⃣ CREATE one document
  const saved = await Item.create({ name: "AW coffee", price: 10 });
  console.log("Saved:", saved);

  // 3️⃣ READ them all back
  const all = await Item.find();
  console.log("All items:", all);

  // 4️⃣ disconnect so Node exits
  await mongoose.disconnect();
})().catch(console.error);
