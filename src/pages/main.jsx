import Hero from '../components/hero/hero';
import Features from '../components/features/features';
import Prices from '../components/prices/prices';
import Faq from '../components/faq/faq';
import States from '../components/states/states';
import ContactUs from '../components/contact-us/contactUs';

export default function Main() {
  return (
    <>
      <Hero />
      <Features />
      <Prices />
      <States />
      <Faq />
      <ContactUs />
    </>
  );
}
