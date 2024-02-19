import { Link, useNavigate } from 'react-router-dom';

export default function Categories() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="w-[45rem] rounded-lg sm:rounded-none sm:rounded-l-lg"
                src="https://img-3.journaldesfemmes.fr/cVpr8riF8bU4H134KDEbkTVwvsw=/1500x/smart/8464681edd7742a8b933e50584a9ebed/ccmcms-jdf/39600895.jpg"
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">L’environnement</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                Textes Législatifs & Réglementaire
              </span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Exploration des Lois et Règlements Essentiels qui
                Encadrent le Secteur de la Santé
              </p>
              <Link
                to="/regulations?category=environment&subCategory=Sustainable+Development"
                className="text-primary-600"
              >
                Explore more!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
