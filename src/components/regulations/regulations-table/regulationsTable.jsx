import {
  FileArrowDown,
  DotsThreeOutline,
  MagnifyingGlass,
  Plus,
} from '@phosphor-icons/react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import env from '../env';
import health from '../health';
import safety from '../safety';
import work from '../work';

export default function RegulationsTable({ onOpenModal, OnSearch }) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  let data = {};
  const handleChangeKeyword = (e) => {
    setSearchKeyword(e.target.value);
    OnSearch(e);
  };
  const urlReg = searchParams.get('subCategory');
  const urlCat = searchParams.get('category');
  if (urlCat == 'health') {
    data = health;
  }

  if (urlCat == 'environment') {
    data = env;
  }
  if (urlCat == 'safety') {
    data = safety;
  }
  if (urlCat == 'work') {
    data = work;
  }
  return (
    <div className="flex-grow bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow overflow-visible">
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
                onChange={handleChangeKeyword}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Search"
                value={searchKeyword}
              />
            </div>
          </form>
        </div>
        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
          <div className="flex items-center space-x-3 w-full md:w-auto">
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
              {/* <th scope="col" className="px-4 py-3">
                Added Date
              </th> */}
              <th scope="col" className="px-4 py-3">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {data
              .find((o) => o.name == urlReg)
              .subReg.map((e) => (
                <tr
                  key={e.id}
                  className="border-b dark:border-gray-700 font-medium text-gray-800"
                >
                  <th
                    scope="row"
                    className="px-4 py-3 whitespace-nowrap dark:text-white"
                  >
                    {e.type}
                  </th>

                  <td className="px-4 py-3">
                    {e.date.split('T')[0]}
                  </td>
                  <td className="px-4 py-3">{e.description}</td>
                  {/* <td className="px-4 py-3">{2024}</td> */}
                  <td className="px-4 py-3">
                    <Link download to="#">
                      <FileArrowDown size={32} color="red" />
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
