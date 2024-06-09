import { LightbulbFilament } from '@phosphor-icons/react';

export default function Faq() {
  return (
    <section className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* text - start */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Frequently asked questions
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Browse through our frequently asked questions to find the
            information you need. If you don't see your question
            listed, feel free to reach out to our friendly support
            team for assistance.
          </p>
        </div>
        {/* text - end */}
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-y-10 xl:grid-cols-3">
          {/* question - start */}
          <div className="relative rounded-lg bg-gray-100 p-5 pt-8">
            <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 text-white">
              <LightbulbFilament size={24} />
            </span>
            <h3 className="mb-3 text-lg font-semibold text-primary-500 md:text-xl">
              How frequently are the HSE regulations updated?
            </h3>
            <p className="text-gray-600">
              A: We update our platform in real-time, sourcing the
              latest HSE regulations directly from government websites
              as soon as they are published.
            </p>
          </div>
          {/* question - end */}
          {/* question - start */}
          <div className="relative rounded-lg bg-gray-100 p-5 pt-8">
            <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 text-white">
              <LightbulbFilament size={24} />
            </span>
            <h3 className="mb-3 text-lg font-semibold text-primary-500 md:text-xl">
              Are the HSE courses on your platform accredited?
            </h3>
            <p className="text-gray-600">
              A: Yes, our courses are developed and led by industry
              experts and are often accredited by relevant governing
              bodies, ensuring high-quality and recognized
              certifications.
            </p>
          </div>
          {/* question - end */}
          {/* question - start */}
          <div className="relative rounded-lg bg-gray-100 p-5 pt-8">
            <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 text-white">
              <LightbulbFilament size={24} />
            </span>
            <h3 className="mb-3 text-lg font-semibold text-primary-500 md:text-xl">
              Can I access the platform on my mobile device?
            </h3>
            <p className="text-gray-600">
              A: Absolutely! Our platform is fully optimized for
              mobile access, allowing you to stay connected and learn
              on-the-go from any device.
            </p>
          </div>
          {/* question - end */}
          {/* question - start */}
          <div className="relative rounded-lg bg-gray-100 p-5 pt-8">
            <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 text-white">
              <LightbulbFilament size={24} />
            </span>
            <h3 className="mb-3 text-lg font-semibold text-primary-500 md:text-xl">
              Are there any prerequisites for courses?
            </h3>
            <p className="text-gray-600">
              A: Our courses cater to a wide range of skill levels,
              from beginners to experienced professionals. Most
              courses do not require prerequisites, but some advanced
              courses may have recommended prior knowledge.
            </p>
          </div>
          {/* question - end */}
          {/* question - start */}
          <div className="relative rounded-lg bg-gray-100 p-5 pt-8">
            <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 text-white">
              <LightbulbFilament size={24} />
            </span>
            <h3 className="mb-3 text-lg font-semibold text-primary-500 md:text-xl">
              How can I track my progress in the courses
            </h3>
            <p className="text-gray-600">
              A: We provide built-in progress tracking tools within
              our platform, allowing you to monitor your course
              completion, quiz scores, and overall learning journey.
            </p>
          </div>
          {/* question - end */}
          {/* question - start */}
          <div className="relative rounded-lg bg-gray-100 p-5 pt-8">
            <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 text-white">
              <LightbulbFilament size={24} />
            </span>
            <h3 className="mb-3 text-lg font-semibold text-primary-500 md:text-xl">
              What kind of support do you offer ?
            </h3>
            <p className="text-gray-600">
              A: Our customer support team is available to assist you
              with any technical issues or questions you may have. You
              can reach out to us via email, live chat, or phone
            </p>
          </div>
          {/* question - end */}
        </div>
      </div>
    </section>
  );
}
