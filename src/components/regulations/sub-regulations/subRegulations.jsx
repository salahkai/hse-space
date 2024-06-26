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
export default function SubRegulations({
  onOpenModal,
  activeSubCategory,
  onChangeSubCategory,
}) {
  let data = {};

  const [searchParams, setSearchParams] = useSearchParams();

  const urlCat = searchParams.get('category');
  if (urlCat == 'health') {
    data = health;
  }
  1;
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
    <div className="w-full md:w-96 px-4">
      <div className="pt-4 relative h-full overflow-hidden bg-white shadow-md dark:bg-gray-800 md:rounded-lg">
        <div className="flex flex-col items-center justify-between p-4 space-y-3">
          <div
            className="flex flex-col w-full border rounded-md shadow-sm overflow-hidden"
            role="group"
          >
            {data.map((e) => (
              <button
                onClick={() => onChangeSubCategory(e.name)}
                key={e.id}
                type="button"
                className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white  border-b  hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:bg-gray-700  dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-primary-500 dark:focus:text-white ${
                  activeSubCategory == e.name && 'text-primary-600'
                }`}
              >
                {e.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
