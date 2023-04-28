import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from 'layouts/Header';
import Footer from 'layouts/Footer';
import Main from 'views/main';
import ScrollUpButton from 'components/scrollUpButton';


const App = () => {
  const [loader, setLoader] = useState(false)

  return (
      <>
        <BrowserRouter>
          <div className='container'>
            <Header />
            <Routes>
              <Route path="/" element={<Main setLoader={setLoader}/>} /> 
            </Routes>
            <Footer />
          </div>
          <ScrollUpButton />
        </BrowserRouter>
      </>
  );
}

export default App;
