import React from 'react';

//@ts-ignore
import ReactDOM from 'react-dom/client';

import Pages from './pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Pages />
  </React.StrictMode>
);
