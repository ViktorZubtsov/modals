import { FC, useState } from 'react';

// @ts-ignore
import { Route, Routes } from 'react-router-dom';

import UiModal from '../../components/ui/UiModal';
const Home: FC = () => {
  const [isModal, setState] = useState<boolean>(false);

  const toggleModal = (): void => {
    return setState(!isModal);
  };

  return (
    <>
      <button onClick={toggleModal}>Open Modal</button>
      <div>
        <UiModal isOpen size={'md'} title={'title'} toggle={() => {}}>
          <div>dfdfd</div>
        </UiModal>
      </div>
      <Routes></Routes>
    </>
  );
};
export default Home;
