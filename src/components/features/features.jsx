import {
  ArrowsClockwise,
  ClockClockwise,
  ChalkboardSimple,
  Certificate,
  CaretRight,
} from '@phosphor-icons/react';

export default function Features() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="py-1 px-4  bg-primary-100 rounded-full text-sm font-medium text-primary-600 text-center">
          Features
        </span>

        <div className="mb-10 mt-2 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
          <div className="relative w-full text-center lg:text-left lg:w-2/4">
            <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
              Unlock the Power of HSE Excellence
            </h2>
          </div>
          <div className="relative w-full text-center  lg:text-left lg:w-2/4">
            <p className="text-lg font-normal text-gray-500 mb-6">
              Stay compliant with automated updates and advance your
              skills with our diverse courses. Your pathway to safety
              excellence starts here.
            </p>
            <a
              href="#"
              className="flex flex-row items-center justify-center gap-2 text-base font-semibold text-primary-600 lg:justify-start hover:text-primary-700 stroke-primary-600"
            >
              Explore Courses
              <CaretRight size={18} />
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center  gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-72 xl:p-7 xl:w-1/4 hover:bg-primary-600">
            <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 text-primary-600">
              <ArrowsClockwise size={28} />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
              Automatic Regulation Updates
            </h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
              Stay up-to-date with the latest HSE regulations
              automatically updated from government websites.
            </p>
          </div>
          <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-72 xl:p-7 xl:w-1/4 hover:bg-primary-600">
            <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 text-primary-600">
              <ClockClockwise size={28} />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
              Real-Time Notifications
            </h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
              Receive instant notifications whenever new regulations
              are published, ensuring you never miss an important
              update.
            </p>
          </div>
          <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-72 xl:p-7 xl:w-1/4 hover:bg-primary-600">
            <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 text-primary-600">
              <ChalkboardSimple size={28} />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
              Comprehensive Course
            </h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
              Access a comprehensive library of HSE courses covering a
              wide range of topics and skill levels.
            </p>
          </div>
          <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-72 xl:p-7 xl:w-1/4 hover:bg-primary-600">
            <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 text-primary-600">
              <Certificate size={28} />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
              Certification Programs
            </h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
              Earn industry-recognized certifications upon completion
              of our HSE courses, enhancing your professional
              credentials.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
