const { MongoClient, ServerApiVersion } = require("mongodb");

const DB = "puffin";
const COLLECTIONS = ["questionnaire_answers", "signatures", "users"];

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

// Replace the placeholder with your Atlas connection string
const uri = process.env.MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function mongodbPing() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export default async function mongodbQuery(collection) {
  const result = [];
  try {
    await client.connect();

    const database = client.db(DB);
    const coll = database.collection(collection);

    const cursor = coll.find();
    for await (const item of cursor) result.push(item);
  } finally {
    await client.close();
  }
  return result;
}
