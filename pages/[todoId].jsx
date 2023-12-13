import TodoForm from '@/components/TodoForm';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { MongoClient, ObjectId } from 'mongodb';

const EditTodoForm = ({ todo }) => {
  const router = useRouter();
  const { edit, todoId } = router.query;

  return (
    <>
      <Head>
        <title>{edit ? 'Edit Todo' : todo.todo}</title>
      </Head>

      <section className='w-full flex flex-col items-center justify-center mt-3'>
        {edit ? (
          <>
            <h1 className='text-3xl font-bold'>Update todo</h1>
            <TodoForm todo={todo} />
          </>
        ) : (
          <h1>Todo ID: {todoId}</h1>
        )}
      </section>
    </>
  );
};

export default EditTodoForm;

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.MONGO_URL);
  const db = client.db();
  const todosCollection = db.collection('todos');
  const todos = await todosCollection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: 'blocking',
    paths: todos.map((todo) => ({
      params: { todoId: todo._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const { todoId } = context.params;
  const client = await MongoClient.connect(process.env.MONGO_URL);
  const db = client.db();
  const todosCollection = db.collection('todos');

  const todo = await todosCollection.findOne({
    _id: new ObjectId(todoId),
  });
  client.close();

  return {
    props: {
      todo: {
        id: todo._id.toString(),
        todo: todo.todo,
        completed: todo.completed,
      },
    },
  };
}
