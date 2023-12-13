import TodoForm from '@/components/TodoForm';
import Head from 'next/head';

const NewTodo = () => {
  return (
    <>
      <Head>
        <title>Add new todo</title>
        <meta name='description' content='Add new todo here' />
      </Head>
      <section className='w-full flex flex-col items-center justify-center mt-3'>
        <h1 className='text-3xl font-bold'>Add new todo</h1>
        <TodoForm />
      </section>
    </>
  );
};

export default NewTodo;
