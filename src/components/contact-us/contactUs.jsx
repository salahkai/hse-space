import { Phone, Envelope, MapPin } from '@phosphor-icons/react';

export default function ContactUs() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="lg:mb-0 mb-10">
            <div className="group w-full h-full">
              <div className="relative h-full">
                <img
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="ContactUs tailwind section"
                  className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-primary-700"
                />
                <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
                  Contact us
                </h1>
                <div className="absolute bottom-0 w-full lg:p-11 p-5">
                  <div className="bg-white rounded-lg p-6 block">
                    <a
                      href=""
                      className="flex items-center mb-6 text-primary-600"
                    >
                      <Phone size={32} />
                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        (+213) 541256986
                      </h5>
                    </a>
                    <a
                      href=""
                      className="flex items-center mb-6  text-primary-600"
                    >
                      <Envelope size={32} />

                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        test@gmail.com
                      </h5>
                    </a>
                    <a
                      href=""
                      className="flex items-center  text-primary-600"
                    >
                      <MapPin size={32} />

                      <h5 className="text-black text-base font-normal leading-6 ml-5">
                        Bni thour w el 9abra tdor
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
            <h2 className="text-primary-600 font-manrope text-4xl font-semibold leading-10 mb-11">
              Send A Message
            </h2>
            <input
              type="text"
              className="w-full h-12 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded-xl border border-gray-200 focus:outline-none pl-6 mb-6"
              placeholder="Name"
            />
            <input
              type="text"
              className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-xl border border-gray-200 focus:outline-none pl-6 mb-6"
              placeholder="Email"
            />
            <input
              type="text"
              className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-xl border border-gray-200 focus:outline-none pl-6 mb-6"
              placeholder="Phone"
            />
            <div className="mb-10">
              <h4 className="text-gray-500 text-lg font-normal leading-7 mb-4">
                Preferred method of communication
              </h4>
              <div className="flex">
                <div className="flex items-center mr-11">
                  <input
                    id="radio-group-1"
                    type="radio"
                    name="radio-group"
                    className="hidden checked:bg-no-repeat checked:bg-center checked:border-primary-500 checked:bg-primary-100"
                  />
                  <label
                    htmlFor="radio-group-1"
                    className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6"
                  >
                    <span className="border border-gray-300 rounded-xl mr-2 w-4 h-4  ml-2 " />
                    Email
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="radio-group-2"
                    type="radio"
                    name="radio-group"
                    className="hidden checked:bg-no-repeat checked:bg-center checked:border-primary-500 checked:bg-primary-100"
                  />
                  <label
                    htmlFor="radio-group-2"
                    className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6"
                  >
                    <span className="border border-gray-300  rounded-xl mr-2 w-4 h-4  ml-2 " />
                    Phone
                  </label>
                </div>
              </div>
            </div>
            <textarea
              type="text"
              className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-xl border border-gray-200 focus:outline-none pt-2 pl-6 mb-10"
              placeholder="Message"
            />
            <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-xl transition-all duration-700 hover:bg-primary-800 bg-primary-600 shadow-sm">
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
