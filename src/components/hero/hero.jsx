import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex dark:from-gray-900 bg-gradient-to-b from-white to-primary-50"
    >
      <div className="container m-auto px-6 py-20 md:pb-0 md:pt-40 md:px-12 lg:py-0 lg:px-10">
        <div className="flex flex-wrap gap-12">
          <div className="lg:w-6/12 lg:pt-32 lg:pb-20">
            <div className="space-y-8 mt-8 lg:-mr-24 xl:-mr-0">
              <h1 className="text-4xl text-gray-800 dark:text-white font-bold md:text-5xl lg:leading-tight">
                Your Premier Resource For HSE Regulations and courses.
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                At HSE Space, we are dedicated to providing you with
                the latest updates on regulations straight from
                government sources in an organized way, Also we offer
                a wide range of courses to enhance your knowledge and
                skills
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/regulations"
                  type="button"
                  title="reulations"
                  className="w-full py-3 px-6 rounded-xl text-center transition bg-primary-600 hover:bg-primary-700 active:bg-primary-800 focus:bg-primary-500 sm:w-max"
                >
                  <span className="block text-white font-semibold">
                    Explore Regulations
                  </span>
                </Link>
                <Link
                  to="/signup"
                  type="button"
                  title="regulations"
                  className="w-full py-3 px-6 rounded-xl text-center transition dark:active:bg-primary-900 dark:focus:bg-gray-800 active:bg-primary-200 focus:bg-primary-100 sm:w-max"
                >
                  <div className="flex justify-center">
                    <span className="block text-primary-700 dark:text-primary-400 font-semibold">
                      Sign Up
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-700">
              <h6 className="text-lg text-primary-800 dark:text-primary-400 font-semibold">
                Trusted by
              </h6>
              <div className="mt-6 flex gap-6">
                <div className="flex items-center">
                  <img
                    className="-hue-rotate-30 w-auto h-auto dark:grayscale"
                    src="https://img.logoipsum.com/285.svg"
                    width={50}
                    height={20}
                    alt="logo partener"
                  />
                </div>
                <div className="flex items-center">
                  <img
                    className="-hue-rotate-30 w-auto h-auto dark:grayscale"
                    src="https://img.logoipsum.com/285.svg"
                    width={50}
                    height={20}
                    alt="logo partener"
                  />
                </div>
                <div className="flex items-center">
                  <img
                    className="-hue-rotate-30 w-auto h-auto dark:grayscale"
                    src="https://img.logoipsum.com/285.svg"
                    width={50}
                    height={20}
                    alt="logo partener"
                  />
                </div>
                <div className="flex items-center">
                  <img
                    className="-hue-rotate-30 w-auto h-auto dark:grayscale"
                    src="https://img.logoipsum.com/285.svg"
                    width={50}
                    height={20}
                    alt="logo partener"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden bottom-0 md:-right-32 md:block md:w-full md:ml-auto lg:absolute lg:-right-32 lg:w-[60%] xl:-right-48">
            <img
              src="https://i.ibb.co/chcJ62v/Designer.png"
              className="ml-48 lg:ml-0"
              loading="lazy"
              width={1053}
              height={772}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
