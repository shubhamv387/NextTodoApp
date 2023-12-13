import Link from 'next/link';
import NavBar from './NavBar';

const Header = () => {
  return (
    <header className='w-full flex items-center justify-center bg-slate-500'>
      <NavBar />
      {/* <nav className='flex container max-w-7xl items-center justify-between'>
        <h1 className='text-2xl font-bold uppercase'>Todo App.</h1>
        <ul className='flex gap-8 font-semibold text-xl'>
          <li>
            <Link
              className='hover:text-cyan-200 duration-200'
              href={'/new-todo'}
            >
              Add Todo
            </Link>
          </li>

          <li>
            <Link className='hover:text-cyan-200 duration-200' href={'/'}>
              All Todos
            </Link>
          </li>

          <li>
            <Link
              className='hover:text-cyan-200 duration-200'
              href={'/completed'}
            >
              Completed
            </Link>
          </li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;
