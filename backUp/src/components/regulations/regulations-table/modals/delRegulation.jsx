import { X, Plus } from '@phosphor-icons/react';
export default function DelRegulation() {
  return (
    <div id="defaultModal" tabIndex={-1} aria-hidden="true">
      <button
        type="button"
        className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-red-600 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <X size={22} weight="bold" />

        <span className="sr-only">Close modal</span>
      </button>
      <div className="relative p-4 w-full h-full md:h-auto">
        <form action="#">
          <h2 className=" mx-2 my-4">Confirm delete regulation?</h2>
          <button
            type="submit"
            className="text-white inline-flex items-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            <Plus size={16} className="mr-1" weight="bold" />
            Delete regulation
          </button>
        </form>
      </div>
    </div>
  );
}
