import { MongoClient } from 'mongodb';

export default async function ADD(req, res) {
  const data = { ...req.body, completed: false };

  try {
    const client = await MongoClient.connect(process.env.MONGO_URL);
    const db = client.db('todos');
    const todoCollections = db.collection('todos');

    await todoCollections.insertOne(data);
    client.close();
    res.status(201).json({ message: 'Todo inserted!' });
  } catch (error) {
    console.log(error);
  }
}
