import { FC, useState } from 'react';

import UiModal from '../components/ui/UiModal';

const Pages: FC = () => {
  const [isModal, setState] = useState<boolean>(false);

  const toggleModal = (): void => {
    return setState(!isModal);
  };

  return (
    <>
      <button onClick={toggleModal}>Open Modal</button>
      <div>
        <UiModal
          isOpen={isModal}
          size={'md'}
          title={'title'}
          toggle={toggleModal}
        >
          <div>dfdfd</div>
        </UiModal>
      </div>
    </>
  );
};
export default Pages;
