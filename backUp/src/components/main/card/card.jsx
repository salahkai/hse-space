import Image from 'next/image';
import Link from 'next/link';

export default function Card({ imageLink, title, paragraph, id }) {
  return (
    <article className="bg-white flex flex-col items-center w-80 text-center drop-shadow-xl">
      <div className="overflow-hidden rounded w-full">
        <Image src={imageLink} alt=""></Image>
      </div>
      <div className="flex- flex-col items-center">
        <h2 className="text-2xl font-bold mt-6 mx-3">{title}</h2>
        <p className="mt-4 mx-3">{paragraph}</p>
        <Link
          href={`/categories/${id}`}
          className="mt-6 w-full py-4 bg-primary-700 text-white font-bold hover:bg-primary-800 focus:ring-2 focus:ring-sky-300 focus:outline-none focus:ring-offset-1 shadow-md"
        >
          Open...
        </Link>
      </div>
    </article>
  );
}
