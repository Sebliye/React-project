import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import RouterComponents from './routes/Routerjs';

function App() {
  return (
      <BrowserRouter>
            <Header></Header>
            <RouterComponents />        {/* it is like body */}
            <Footer></Footer>
      </BrowserRouter>
  );
}
export default App;;
