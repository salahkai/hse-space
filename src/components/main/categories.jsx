import Card from './card/card';
import cardImage from '../../src/app/images/cards/test.jpg';

export default function Main() {
  return (
    <main className=" text-textColor">
      <div className="flex gap-12 p-16 flex-wrap justify-center">
        <Card imageLink={cardImage} title="" paragraph="" id="" />
      </div>
    </main>
  );
}
