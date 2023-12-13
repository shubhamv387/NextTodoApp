import { MongoClient, ObjectId } from 'mongodb';

export default async function UPDATE(req, res) {
  const url = req.url.split('/');
  const id = url[url.length - 1];

  try {
    const client = await MongoClient.connect(process.env.MONGO_URL);
    const db = client.db('todos');
    const todoCollections = db.collection('todos');

    const data = await todoCollections.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: req.body },
      { returnOriginal: false }
    );

    client.close();
    res.status(200).json({ message: 'Todo updated successfully!' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error updating todo.' });
  }
}
