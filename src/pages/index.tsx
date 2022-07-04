//@ts-ignore
import { Navigate, Routes, Route } from 'react-router-dom';

import Home from './home';
const Pages = () => {
  return (
    <>
      <Routes>
        <Route element={<Navigate replace to="/home" />} path="/" />
        <Route element={<Home />} path="/home" />
        <Route element={<div>Нет страницы</div>} path="*" />
      </Routes>
    </>
  );
};
export default Pages;
