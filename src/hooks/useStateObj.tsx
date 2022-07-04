import { useState } from 'react';

export const useStateObj = (value: any) => {
  const [state, setUseState] = useState(value);

  const setState = (update: any) => {
    return setUseState((prevState: any) => ({ ...prevState, ...update }));
  };

  return [state, setState];
};
