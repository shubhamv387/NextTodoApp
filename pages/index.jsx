import { MongoClient } from 'mongodb';

import Head from 'next/head';
import TodoList from '@/components/TodoList';

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Simple Todo App</title>
        <meta name='description' content='Best Simple Todo App on the Earth' />
      </Head>

      <section className='w-full flex flex-col gap-10 items-center justify-center mt-3'>
        {props.todos.length > 0 && (
          <h1 className='text-3xl font-bold'>All Todos</h1>
        )}
        <TodoList todos={props.todos} />
      </section>
    </>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGO_URL);
  const db = client.db();
  const todoCollections = db.collection('todos');
  const todos = await todoCollections.find({ completed: false }).toArray();

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
