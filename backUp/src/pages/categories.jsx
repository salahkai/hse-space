import { Link, useNavigate } from 'react-router-dom';

export default function Categories() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto mt-16 lg:py-16 lg:px-6 flex flex-wrap justify-around">
        <div className="w-[45%] grid gap-8  lg:mb-16 ">
          <div className="p-1 items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="w-[45rem] h-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src="https://cdn0.projetecolo.com/fr/posts/8/0/2/quelle_est_l_importance_de_l_environnement_208_600.jpg"
              />
            </a>
            <div className="px-5 ">
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
        <div className="w-[45%] grid gap-8  lg:mb-16 ">
          <div className="p-1 items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="w-[45rem] h-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src="https://www.altersecurite.org/wp-content/uploads/2022/05/Culture-de-pr%C3%A9vention-1.jpg"
              />
            </a>
            <div className="px-5 ">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Travail</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                Textes Législatifs & Réglementaire
              </span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Exploration des Lois et Règlements Essentiels qui
                Encadrent le Secteur de Travail
              </p>
              <Link
                to="/regulations?category=environment&subCategory=Sustainable+Development"
                className="text-primary-600"
              >
                Explore more!
              </Link>
            </div>
          </div>
        </div>{' '}
        <div className="w-[45%] grid gap-8  lg:mb-16 ">
          <div className="p-1 items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="w-[45rem] h-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src="https://img-3.journaldesfemmes.fr/cVpr8riF8bU4H134KDEbkTVwvsw=/1500x/smart/8464681edd7742a8b933e50584a9ebed/ccmcms-jdf/39600895.jpg"
              />
            </a>
            <div className="px-5 ">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">La Santé</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                Textes Législatifs & Réglementaire
              </span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Exploration des Lois et Règlements Essentiels qui
                Encadrent le Secteur de la Santé
              </p>
              <Link
                to="/regulations?category=health&subCategory=Sustainable+Development"
                className="text-primary-600"
              >
                Explore more!
              </Link>
            </div>
          </div>
        </div>{' '}
        <div className="w-[45%] grid gap-8  lg:mb-16 ">
          <div className="p-1 items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="w-[45rem] h-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src="https://ml5tkgddzyxr.i.optimole.com/cb:UULj.3a7e7/w:auto/h:auto/q:mauto/f:best/id:3588177fa3a01fe1d79b56b671e49128/https://knowerintl.org/%E6%9C%AA%E5%91%BD%E5%90%8D1684306881.jpg"
              />
            </a>
            <div className="px-5 ">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">La Sécurité</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                Textes Législatifs & Réglementaire
              </span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Exploration des Lois et Règlements Essentiels qui
                Encadrent le Secteur de la Sécurité
              </p>
              <Link
                to="/regulations?category=security&subCategory=Sustainable+Development"
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
