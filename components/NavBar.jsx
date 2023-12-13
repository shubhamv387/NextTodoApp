import Link from 'next/link';
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className='container inset-x-0 top-0 z-10'>
      <nav
        className='flex items-center justify-between p-4 lg:p-6 lg:px-8'
        aria-label='Global'
      >
        <h1 className='text-2xl font-bold uppercase'>Todo App.</h1>

        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>

        <div className='hidden lg:flex lg:gap-x-12'>
          <Link
            className='hover:text-cyan-200 duration-200 font-semibold text-xl'
            href={'/new-todo'}
          >
            Add Todo
          </Link>
          <Link
            className='hover:text-cyan-200 duration-200  font-semibold text-xl'
            href={'/'}
          >
            All Todos
          </Link>
          <Link
            className='hover:text-cyan-200 duration-200  font-semibold text-xl'
            href={'/completed'}
          >
            Completed
          </Link>
        </div>
      </nav>

      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-50' />
        <Dialog.Panel className='fixed flex flex-col inset-y-0 min-h-screen right-0 z-50 w-full overflow-y-auto bg-slate-700 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-bold uppercase'>Todo App.</h1>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-white'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>

          <div className='mt-6 flex-1 gap-10 text-3xl font-semibold flex flex-col items-center justify-center'>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              className='hover:text-cyan-200 duration-200'
              href={'/new-todo'}
            >
              Add Todo
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              className='hover:text-cyan-200 duration-200'
              href={'/'}
            >
              All Todos
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              className='hover:text-cyan-200 duration-200'
              href={'/completed'}
            >
              Completed
            </Link>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6 flex flex-col items-center justify-center h-full mt-5'></div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default NavBar;
