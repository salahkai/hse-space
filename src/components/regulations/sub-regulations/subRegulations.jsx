import {
  FileArrowDown,
  DotsThreeOutline,
  MagnifyingGlass,
  Plus,
} from '@phosphor-icons/react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SubRegulations({ data, onOpenModal }) {
  return (
    <div className="w-full md:w-96 px-4">
      <div className="relative h-full overflow-hidden bg-white shadow-md dark:bg-gray-800 md:rounded-lg">
        <div className="flex flex-col items-center justify-between p-4 space-y-3">
          <button
            onClick={() => onOpenModal('addRegulation')}
            type="button"
            className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-lg  bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            <Plus size={16} className="mr-1" weight="bold" />
            Add sub-category
          </button>
          <div
            className="flex flex-col w-full border rounded-md shadow-sm overflow-hidden"
            role="group"
          >
            {data.map((e) => (
              <button
                key={e.id}
                type="button"
                className="px-4 py-2 text-sm font-medium text-gray-900 bg-white  border-b  hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:bg-gray-700  dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-primary-500 dark:focus:text-white"
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
