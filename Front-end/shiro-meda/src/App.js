import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Footer from './components/footer/footer';
import RouterComponents from './routes/Routerjs';

function App() {
  return (
      <BrowserRouter>
            
            <RouterComponents />        {/* it is like body */}
            
      </BrowserRouter>
  );
}
export default App;;
//<Footer></Footer>