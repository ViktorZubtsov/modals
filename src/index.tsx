import React from 'react';

//@ts-ignore
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Pages from './pages';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  </React.StrictMode>
);
