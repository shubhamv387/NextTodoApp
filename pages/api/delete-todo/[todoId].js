import { MongoClient, ObjectId } from 'mongodb';

export default async function DELETE(req, res) {
  const url = req.url.split('/');
  const id = url[url.length - 1];

  try {
    const client = await MongoClient.connect(process.env.MONGO_URL);
    const db = client.db('todos');
    const todoCollections = db.collection('todos');

    await todoCollections.deleteOne({
      _id: new ObjectId(id),
    });

    client.close();
    res.status(200).json({ message: 'Todo deleted successfully!' });
  } catch (error) {
    console.log(error);
  }
}
