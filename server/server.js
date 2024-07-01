import express from "express";
import { promises as fs } from "fs";
import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;
const collChars = process.env.MONGO_COLLECTION_CHARS;
const collFilms = process.env.MONGO_COLLECTION_FILMS;
const collPlans = process.env.MONGO_COLLECTION_PLANS;
const collFilmsChars = process.env.MONGO_COLLECTION_FILMS_CHARS;
const collFilmsPlans = process.env.MONGO_COLLECTION_FILMS_PLANS;

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;

app.get("/api/planets", async (req, res) => {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(collPlans);
    const planets = await collection.find({}).toArray();
    res.json(planets);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Death star blew the planet up - no planet found");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
