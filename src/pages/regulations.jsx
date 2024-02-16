import { Link, useNavigate } from 'react-router-dom';
import {
  FileArrowDown,
  DotsThreeOutline,
  Plus,
} from '@phosphor-icons/react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

import AddRegulation from '../components/regulations/regulations-table/modals/addRegulation';
import RegulationsTable from '../components/regulations/regulations-table/regulationsTable';
import SubRegulations from '../components/regulations/sub-regulations/subRegulations';

import DefaultModal from '../components/regulations/defaultModal';

export default function Regulations() {
  let [modalId, setModalId] = useState(0);
  let [modals, setModals] = useState({
    addRegulation: true,
    delRegulation: false,
    editRegulation: false,
  });

  const handleOpenModal = (modal) => {
    setModals((prev) => ({ ...prev, [modal]: true }));
  };
  const handleCloseModal = (modal) => {
    setModals((prev) => ({ ...prev, [modal]: false }));
  };

  const test = [
    {
      id: 0,
      type: 'Decree',
      description: 'the tables of occupational diseases.',
      creationDate: 'March 22',
      addedDate: '2024/01/01',
      link: '#',
    },
    {
      id: 0,
      type: 'Decree',
      description: 'the tables of occupational diseases.',
      creationDate: 'March 22',
      addedDate: '2024/01/01',
      link: '#',
    },
  ];

  const sub = [
    { name: 'Occupational Diseases and Work Accidents' },
    { name: 'Pharmaceutical Products' },
  ];
  return (
    <section className="mt-24 bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className=" max-w-screen-xl flex items-stretch ">
        <SubRegulations data={sub} onOpenModal={handleOpenModal} />
        <RegulationsTable data={test} onOpenModal={handleOpenModal} />
      </div>
      {/* add regulation */}
      <DefaultModal
        isOpen={modals.addRegulation}
        name="addRegulation"
        ModalContent={<AddRegulation></AddRegulation>}
        onCloseModal={handleCloseModal}
      />
    </section>
  );
}
