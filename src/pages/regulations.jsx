import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import {
  FileArrowDown,
  DotsThreeOutline,
  Plus,
} from '@phosphor-icons/react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { useEffect, Fragment, useState } from 'react';
import axios from 'axios';
import _ from 'lodash';

import AddRegulation from '../components/regulations/regulations-table/modals/addRegulation';
import DelRegulation from '../components/regulations/regulations-table/modals/delRegulation';
import EditRegulation from '../components/regulations/regulations-table/modals/editRegulation';
import DefaultModal from '../components/regulations/defaultModal';

import RegulationsTable from '../components/regulations/regulations-table/regulationsTable';
import SubRegulations from '../components/regulations/sub-regulations/subRegulations';

import { API } from '../constant';
export default function Regulations() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category');
  const subCategory = searchParams.get('subCategory');

  let [regulations, setRegulations] = useState([]);
  let [beforeSearchRegulations, setBeforeSearchRegulations] =
    useState();

  let [subRegulations, setSubRegulations] = useState([]);
  let [activeSubCategory, setActiveSubCategory] = useState();

  let [modalId, setModalId] = useState(0);
  let [modals, setModals] = useState({
    addRegulation: false,
    delRegulation: false,
    editRegulation: false,
  });

  const handleOnSearch = (event) => {
    event.preventDefault();
    const keyword = event.target.value;
    if (event.target.value === '' || !event.target.value) {
      setRegulations(beforeSearchRegulations);
      return;
    }
    if (regulations) {
      setRegulations(
        regulations.filter((a) =>
          _.values(a.attributes).some((b) => b.includes(keyword))
        )
      );
    }
  };
  const handleChangeSubCategory = (name) => {
    navigate(`/regulations?category=${category}&subCategory=${name}`);

    // setActiveSubCategory(name);
    // setSearchParams((searchParams) => {
    //   searchParams.set('subCategory', name);
    //   return searchParams;
    // });
  };
  useEffect(() => {
    axios
      .get(
        `${API}/sub-categories?filters[$and][0][category][name][$eq]=${category}`
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        if (!subCategory) {
          setSearchParams((searchParams) => {
            searchParams.set(
              'subCategory',
              data.data[0].attributes.name
            );
            return searchParams;
          });
          setActiveSubCategory(data.data[0].attributes.name);
        }
        setActiveSubCategory(subCategory);

        setSubRegulations(data.data);
      });

    axios
      .get(
        `${API}/regulations?filters[$and][0][sub_categories][name][$eq]=${subCategory}`
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setRegulations(data.data);
        setBeforeSearchRegulations(data.data);
      });
  }, []);

  const handleOpenModal = (modal) => {
    setModals((prev) => ({ ...prev, [modal]: true }));
  };
  const handleCloseModal = () => {
    setModals({
      addRegulation: false,
      delRegulation: false,
      editRegulation: false,
    });
  };
  return (
    <section className="mt-24 bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className=" max-w-screen-xl flex items-stretch ">
        <SubRegulations
          onChangeSubCategory={handleChangeSubCategory}
          activeSubCategory={activeSubCategory}
          data={subRegulations}
          onOpenModal={handleOpenModal}
        />
        <RegulationsTable
          OnSearch={handleOnSearch}
          data={regulations}
          onOpenModal={handleOpenModal}
        />
      </div>
      {/* add regulation */}
      <DefaultModal
        isOpen={modals.addRegulation}
        name="addRegulation"
        onCloseModal={handleCloseModal}
        title="Add Regulation"
      >
        <AddRegulation />
      </DefaultModal>
      <DefaultModal
        isOpen={modals.delRegulation}
        name="delRegulation"
        onCloseModal={handleCloseModal}
        title="Delete Regulation"
      >
        <DelRegulation />
      </DefaultModal>
      <DefaultModal
        isOpen={modals.editRegulation}
        name="editRegulation"
        onCloseModal={handleCloseModal}
        title="Edit Regulation"
      >
        <EditRegulation />
      </DefaultModal>
    </section>
  );
}
