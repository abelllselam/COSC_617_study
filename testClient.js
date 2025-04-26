import dotenv from "dotenv";
dotenv.config();

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
console.log("MongoClient connecting to:", uri);

async function runPing() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("✅ MongoClient connected");
    const res = await client.db("test").command({ ping: 1 });
    console.log("Ping result:", res);
  } catch (e) {
    console.error("❌ MongoClient error:", e);
  } finally {
    await client.close();
  }
}

runPing();
