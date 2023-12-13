import { MongoClient } from 'mongodb';
import Head from 'next/head';
import TodoList from '@/components/TodoList';

const completed = (props) => {
  return (
    <>
      <Head>
        <title>Completed Todos</title>
      </Head>

      <section className='w-full flex flex-col gap-10 mt-3 items-center justify-center'>
        {props.todos.length > 0 && (
          <h1 className='text-3xl font-bold'>Completed Todos</h1>
        )}
        <TodoList todos={props.todos} />
      </section>
    </>
  );
};

export default completed;
export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGO_URL);
  const db = client.db();
  const todoCollections = db.collection('todos');
  const todos = await todoCollections.find({ completed: true }).toArray();

  client.close();

  return {
    props: {
      todos: todos.map((todo) => ({
        id: todo._id.toString(),
        todo: todo.todo,
        completed: todo.completed,
      })),
    },
    revalidate: 1,
  };
}
