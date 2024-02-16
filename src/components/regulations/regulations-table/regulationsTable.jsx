import {
  FileArrowDown,
  DotsThreeOutline,
  MagnifyingGlass,
  Plus,
} from '@phosphor-icons/react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function RegulationsTable({ data, onOpenModal }) {
  return (
    <div className="flex-grow bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-visible">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
        <div className="w-full md:w-1/2">
          <form className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-600">
                <MagnifyingGlass size={20} />
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Search"
                required=""
              />
            </div>
          </form>
        </div>
        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
          <button
            type="button"
            onClick={() => onOpenModal('addRegulation')}
            className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            <Plus size={16} className="mr-1" weight="bold" />
            Add regulation
          </button>
          <div className="flex items-center space-x-3 w-full md:w-auto">
            <button
              id="filterDropdownButton"
              data-dropdown-toggle="filterDropdown"
              className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="h-4 w-4 mr-2 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                  clipRule="evenodd"
                />
              </svg>
              Filter
              <svg
                className="-mr-1 ml-1.5 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                />
              </svg>
            </button>
            <div
              id="filterDropdown"
              className="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
            >
              <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                Choose brand
              </h6>
              <ul
                className="space-y-2 text-sm"
                aria-labelledby="filterDropdownButton"
              >
                <li className="flex items-center">
                  <input
                    id="apple"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="apple"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Apple (56)
                  </label>
                </li>
                <li className="flex items-center">
                  <input
                    id="fitbit"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="fitbit"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Microsoft (16)
                  </label>
                </li>
                <li className="flex items-center">
                  <input
                    id="razor"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="razor"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Razor (49)
                  </label>
                </li>
                <li className="flex items-center">
                  <input
                    id="nikon"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="nikon"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Nikon (12)
                  </label>
                </li>
                <li className="flex items-center">
                  <input
                    id="benq"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="benq"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    BenQ (74)
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <table className="overflow-x-scroll w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3">
                Type
              </th>
              <th scope="col" className="px-4 py-3">
                Date
              </th>
              <th scope="col" className="px-4 py-3">
                Description
              </th>
              <th scope="col" className="px-4 py-3">
                Added Date
              </th>
              <th scope="col" className="px-4 py-3">
                Link
              </th>
              <th scope="col" className="px-4 py-3 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => (
              <tr
                key={e.id}
                className="border-b dark:border-gray-700 font-medium text-gray-800"
              >
                <th
                  scope="row"
                  className="px-4 py-3 whitespace-nowrap dark:text-white"
                >
                  test
                </th>

                <td className="px-4 py-3">{e.creationDate}</td>
                <td className="px-4 py-3">{e.description}</td>
                <td className="px-4 py-3">{e.addedDate}</td>
                <td className="px-4 py-3">
                  <Link download to={e.link}>
                    <FileArrowDown size={32} color="red" />
                  </Link>
                </td>
                <td className="px-4 ">
                  <div className="flex items-center justify-end">
                    <Menu
                      as="div"
                      className="relative inline-block text-left"
                    >
                      <Menu.Button>
                        <DotsThreeOutline size={20} weight="fill" />
                      </Menu.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="z-10 absolute right-0 mt-2 w-20 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
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
                                  Edit
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`${
                                    active
                                      ? 'bg-primary-500 text-white'
                                      : 'text-gray-900'
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  Delete
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <nav
        className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Showing
          <span className="font-semibold text-gray-900 dark:text-white">
            &nbsp;1-10
          </span>
          &nbsp;of
          <span className="font-semibold text-gray-900 dark:text-white">
            &nbsp;1000
          </span>
        </span>
      </nav>
    </div>
  );
}
