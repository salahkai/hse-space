import { CheckCircle } from '@phosphor-icons/react';

export default function Prices() {
  return (
    <section className="py-24 relative" id="prices">
      <div className="absolute h-[36.5rem] w-full top-0 bg-gradient-to-r from-primary-600 to-primary-500 -z-10" />
      <section className="">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="font-manrope text-5xl text-center font-bold text-white mb-4">
              Choose your plan
            </h2>
            <p className="text-white text-center leading-6 mb-9">
              Free 7 days trial. No credit card required.
            </p>
          </div>
          {/*Grid*/}
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0 lg:items-center">
            {/*Pricing Card*/}
            <div className="flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl bg-gray-50 p-6 xl:py-9 xl:px-12 transition-all duration-500 hover:bg-gray-100">
              <h3 className="font-manrope text-2xl font-bold mb-3">
                Free
              </h3>
              <div className="flex items-center mb-6">
                <span className="font-manrope mr-2 text-6xl font-semibold">
                  0
                </span>
                <span className="text-xl text-gray-500 ">
                  / month
                </span>
              </div>
              {/*List*/}
              <ul className="mb-12 space-y-6 text-left text-lg text-gray-500">
                <li className="flex items-center space-x-4 text-primary-600 text-primary-600">
                  <CheckCircle size={28} />
                  <span className="text-gray-500">
                    Updates email notification
                  </span>
                </li>
                <li className="flex items-center space-x-4 text-primary-600">
                  <CheckCircle size={28} />
                  <span className="text-gray-500">
                    All regulations access
                  </span>
                </li>
                <li className="flex items-center space-x-4 text-primary-600">
                  <CheckCircle size={28} />
                  <span className="text-gray-500">
                    Access to free courses
                  </span>
                </li>
                <li className="flex items-center space-x-4 text-primary-600">
                  <CheckCircle size={28} />
                  <span className="text-gray-500">
                    Technical support via email
                  </span>
                </li>
              </ul>
              <a
                href="#"
                className="py-4 px-8 bg-primary-600 shadow-sm rounded-full transition-all duration-500 text-lg text-white font-semibold text-center w-fit mx-auto hover:bg-primary-700"
              >
                Purchase Plan
              </a>
              {/*List End*/}
            </div>
            {/*Pricing Card*/}
            <div className="flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl bg-primary-50 transition-all duration-500 hover:bg-primary-100 ">
              <div className="uppercase bg-gray-800 rounded-t-2xl p-3 text-center text-white font-bold">
                MOST POPULAR
              </div>
              <div className="p-6 xl:py-9 xl:px-12">
                <h3 className="font-manrope text-2xl font-bold mb-3">
                  Advanced
                </h3>
                <div className="flex items-center mb-6">
                  <span className="font-manrope mr-2 text-6xl font-semibold text-primary-600">
                    0
                  </span>
                  <span className="text-xl text-gray-500 ">
                    / month
                  </span>
                </div>
                {/*List*/}
                <ul className="mb-12 space-y-6 text-left text-lg ">
                  <li className="flex items-center space-x-4 text-primary-600">
                    <span>All free plan features plus :</span>
                  </li>
                  <li className="flex items-center space-x-4 text-primary-600">
                    {/* Icon */}
                    <CheckCircle size={28} />

                    <span className="text-gray-800">
                      SMS updates notification
                    </span>
                  </li>
                  <li className="flex items-center space-x-4 text-primary-600">
                    {/* Icon */}
                    <CheckCircle size={28} />

                    <span className="text-gray-800">
                      Access to all courses
                    </span>
                  </li>
                  <li className="flex items-center space-x-4 text-primary-600">
                    {/* Icon */}
                    <CheckCircle size={28} />

                    <span className="text-gray-800">
                      Technical support via phone
                    </span>
                  </li>
                </ul>
                <a
                  href="#"
                  className="py-4 px-8 bg-primary-600 shadow-sm rounded-full transition-all duration-500 text-lg text-white font-semibold text-center w-fit block mx-auto hover:bg-primary-700"
                >
                  Purchase Plan
                </a>
                {/*List End*/}
              </div>
            </div>
            {/*Pricing Card*/}
            <div className="flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl bg-gray-50 p-6 xl:py-9 xl:px-12 transition-all duration-500 hover:bg-gray-100">
              <h3 className="font-manrope text-2xl font-bold mb-3">
                Team
              </h3>
              <div className="flex items-center mb-6">
                <span className="font-manrope mr-2 text-6xl font-semibold">
                  0
                </span>
                <span className="text-xl text-gray-500 ">
                  / month
                </span>
              </div>
              {/*List*/}
              <ul className="mb-12 space-y-6 text-left text-lg text-gray-500">
                <li className="flex items-center space-x-4 text-primary-600">
                  All free plan features plus :
                </li>
                <li className="flex items-center space-x-4 text-primary-600">
                  <CheckCircle size={28} />
                  <span className="text-gray-500">
                    SMS updates notification
                  </span>
                </li>
                <li className="flex items-center space-x-4 text-primary-600">
                  <CheckCircle size={28} />
                  <span className="text-gray-500">
                    Access to all courses
                  </span>
                </li>
                <li className="flex items-center space-x-4 text-primary-600">
                  <CheckCircle size={28} />
                  <span className="text-gray-500">
                    Technical support via phone
                  </span>
                </li>
                <li className="flex items-center space-x-4 text-primary-600">
                  <CheckCircle size={28} />
                  <span className="text-gray-500">
                    Priority customer support
                  </span>
                </li>
              </ul>
              <a
                href="#"
                className="py-4 px-8 bg-primary-600 shadow-sm rounded-full transition-all duration-500 text-lg text-white font-semibold text-center w-fit mx-auto hover:bg-primary-700"
              >
                Purchase Plan
              </a>
              {/*List End*/}
            </div>
          </div>
          {/*Grid End*/}
        </div>
      </section>
    </section>
  );
}
