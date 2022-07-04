import { FC, useState } from 'react';

// @ts-ignore
import { Route, Routes } from 'react-router-dom';

const Home: FC = () => {
  const [isModal, setState] = useState<boolean>(false);

  const toggleModal = (): void => {
    return setState(!isModal);
  };

  return (
    <>
      <button onClick={toggleModal}>Open Modal</button>
    </>
  );
};
export default Home;
