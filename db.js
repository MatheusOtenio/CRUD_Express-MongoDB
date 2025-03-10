require("dotenv").config();
const { MongoClient, ObjectId } = require("mongodb");
let singleton;

async function connect() {
  if (singleton) return singleton;
  const client = new MongoClient(process.env.MONGO_HOST);
  await client.connect();
  singleton = client.db(process.env.MONGO_DB_NAME);
  return singleton;
}

async function insert(customer) {
  const db = await connect();
  return db.collection("customers").insertOne(customer);
}

async function getAll() {
  const db = await connect();
  return db.collection("customers").find().toArray();
}

async function findById(id) {
  const db = await connect();
  return db.collection("customers").findOne({ _id: new ObjectId(id) });
}

async function update(id, customer) {
  const db = await connect();
  return db
    .collection("customers")
    .updateOne({ _id: new ObjectId(id) }, { $set: customer });
}

async function remove(id) {
  const db = await connect();
  return db.collection("customers").deleteOne({ _id: new ObjectId(id) });
}

module.exports = { insert, getAll, findById, update, remove };
