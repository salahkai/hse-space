import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { Menu, Transition } from '@headlessui/react';
import { removeToken } from '../../helpers';
import { Fragment } from 'react';
import { UserCircle } from '@phosphor-icons/react';

export default function Navbar() {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const handleLogout = () => {
    removeToken();
    navigate('/login', { replace: true });
  };
  return (
    <header className="absolute top-0 left-0 w-full flex justify-center">
      <nav className="absolute w-full">
        <div className="relative z-30 bg-white dark:bg-gray-900">
          <div className="container m-auto md:px-12 lg:py-0 lg:px-10">
            <div className="flex flex-wrap items-center justify-between py-4 gap-6 md:gap-0">
              <input
                type="checkbox"
                name="toggle_nav"
                id="toggle_nav"
                className="peer hidden"
              />
              <div className="w-full px-6 flex justify-between md:w-max md:px-0 z-30">
                <Link to="/" aria-label="logo">
                  <img
                    src="https://i.ibb.co/y6JBy6H/20240219-122827-0000.png"
                    className="w-40 dark:hidden"
                    alt="tailus logo"
                    width={144}
                    height={68}
                  />
                  <img
                    src="images/logo-white.svg"
                    className="w-36 hidden dark:block"
                    alt="tailus logo"
                    width={144}
                    height={68}
                  />
                </Link>
                <div className="flex items-center md:hidden max-h-10">
                  <label
                    role="button"
                    htmlFor="toggle_nav"
                    aria-label="humburger"
                    id="hamburger"
                    className="relative p-2"
                  >
                    <div
                      id="line"
                      className="m-auto h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                    />
                    <div
                      id="line2"
                      className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                    ></div>
                  </label>
                </div>
              </div>
              <label
                htmlFor="toggle_nav"
                className="hidden peer-checked:block fixed w-full h-full left-0 top-0 z-10 bg-primary-200 bg-opacity-30 backdrop-blur backdrop-filter"
              />
              <div
                className="hidden z-40 peer-checked:flex w-11/12 mx-auto md:mx-0 flex-col 
                  justify-end items-center gap-y-8 p-6 
                  rounded-xl bg-white dark:bg-gray-800 md:flex md:w-8/12 
                  md:gap-y-0 md:gap-x-4 md:divide-x md:p-0 
                  md:flex-row md:bg-transparent lg:w-7/12"
              >
                <div className="block w-full md:w-max">
                  <ul
                    className="gap-y-6 tracking-wide 
                          text-gray-500 dark:text-gray-300 font-medium flex flex-col md:flex-row md:gap-y-0"
                  >
                    <li>
                      <Link
                        to="/"
                        className={`block md:px-4 ${
                          path == '/' && 'group '
                        }`}
                      >
                        <div
                          className={`${
                            path == '/'
                              ? 'text-primary-600 dark:text-primary-400 before:h-1 before:mx-auto before:rounded-t-full before:bg-primary-500'
                              : 'group before:w-full before:h-0.5 before:origin-left before:rounded-full before:bg-primary-800 before:transition before:scale-x-0 group-hover:before:scale-x-100'
                          }
                          relative before:absolute before:-bottom-2 md:before:-bottom-7 before:w-full before:mt-auto`}
                        >
                          <span
                            className={
                              path == '/' ||
                              'group-hover:text-primary-500'
                            }
                          >
                            Home
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/categories"
                        className={`block md:px-4 ${
                          path == 'categories' && 'group '
                        }`}
                      >
                        <d
                          className={`${
                            path == '/categories'
                              ? 'text-primary-600 dark:text-primary-400 before:h-1 before:mx-auto before:rounded-t-full before:bg-primary-500'
                              : 'group before:w-full before:h-0.5 before:origin-left before:rounded-full before:bg-primary-800 before:transition before:scale-x-0 group-hover:before:scale-x-100'
                          }
                          relative before:absolute before:-bottom-2 md:before:-bottom-7 before:w-full before:mt-auto`}
                        >
                          <span
                            className={
                              path == 'regulations' ||
                              'group-hover:text-primary-500'
                            }
                          >
                            Regulations
                          </span>
                        </d>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://hse-space-run-place.preview-domain.com/"
                        className="block md:px-4 group"
                      >
                        <div
                          className={`relative group
                                                  before:absolute before:-bottom-2 md:before:-bottom-7 before:w-full before:h-0.5 before:origin-left before:mt-auto before:rounded-full before:bg-primary-800 before:transition before:scale-x-0 group-hover:before:scale-x-100`}
                        >
                          <span className="group-hover:text-primary-500">
                            Courses
                          </span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="w-full pl-2
                      sm:w-max gap-4 flex min-w-max flex-col sm:flex-row"
                >
                  {user ? null : (
                    <Link
                      to="/login"
                      className="w-full py-3 px-6 rounded-xl text-center transition dark:active:bg-primary-900 dark:focus:bg-gray-800 active:bg-primary-200 focus:bg-primary-100 sm:w-max"
                    >
                      <span className="block text-primary-600 dark:text-primary-500 font-semibold">
                        Login
                      </span>
                    </Link>
                  )}
                  {user ? null : (
                    <Link
                      to="/signup"
                      className="w-full py-3 px-6 rounded-xl text-center transition bg-primary-600 hover:bg-primary-700 active:bg-primary-800 focus:bg-primary-500 sm:w-max"
                    >
                      <span className="block text-white font-semibold">
                        Sign up
                      </span>
                    </Link>
                  )}
                  {user ? (
                    <Menu
                      as="div"
                      className="relative inline-block text-left"
                    >
                      <div>
                        <Menu.Button className="rounded-full  overflow-hidden w-8 h-8 flex justify-center items-center text-gray-500">
                          <UserCircle size={32} />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                          <div className="px-1 py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/profile"
                                  className={`${
                                    active
                                      ? 'bg-primary-500 text-white'
                                      : 'text-gray-900'
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  Profile Settings
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={handleLogout}
                                  className={`${
                                    active
                                      ? 'bg-red-500 text-white'
                                      : 'text-gray-900'
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  Logout
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
