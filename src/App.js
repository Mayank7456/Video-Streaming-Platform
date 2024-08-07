import 'bootstrap/dist/css/bootstrap.min.css';
// Import Swiper Styles
import 'swiper/css';
import './App.css';


import Header from './pages/Header';
import Banner from './pages/Banner';
import Main from './pages/Main';
import Footer from './pages/Footer';
import BackToTopBtn from './components/BackToTopBtn';
import { useEffect, useState } from 'react';

function App() {


  const [ scroll, setScroll ] = useState(0);
 
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      setScroll(window.scrollY);
    });
    return () =>{
      window.removeEventListener('scroll',()=>{
        setScroll(window.scrollY);
      });
    };
  },[scroll]);

return (
   <>
   <Header scroll={scroll} />
   <Banner />
   <Main />
   <BackToTopBtn  scroll={scroll} />
   </>
  );
}

export default App;
