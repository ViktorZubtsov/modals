import { FC, useState } from 'react';

import { useStateObj } from '../../../hooks/useStateObj';
import UiModal from '../../ui/UiModal';

interface ISignInModal {
  isOpen: boolean

  toggle(): void
}
const SignInModal: FC<ISignInModal> = (props) => {
  const toggle = (): void => {
    return props.toggle()
  }
  const [state, setState] = useStateObj({
    email: '',
    password: '',
    repeatPassword: '',
    firstName: '',
    lastName: '',
    date: ''
  })

  return (
    <UiModal isOpen size={'md'} title={'Создать акаунт'} toggle={toggle}>
      <article>
        {/*<div>*/}
        {/*  <input placeholder="email" type="text" value={state.email} onChange={}/>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <input placeholder="password" type="password" value={state.password} onChange={}/>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <input placeholder="repeat password" type="password" value={state.repeatPassword} onChange={}/>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <input placeholder="first name" type="text" value={state.firstName} onChange={}/>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <input placeholder="last name" type="text" value={state.lastName} onChange={}/>*/}
        {/*</div>*/}
      </article>
    </UiModal>
  )
}
export default SignInModal