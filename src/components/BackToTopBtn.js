import React from 'react'
import './backtotopbtn.css';

function BackToTopBtn({ scroll }) {
    const backToTop = ()=>{
        window.scrollTo(0,0);
    };
  return (
   <a
     className={`back-to-top ${scroll > 100 ? 'active' : ''}`}  
     onClick={backToTop} 
   >
  <ion-icon name="arrow-up-outline"></ion-icon>

   </a>
  );
}

export default BackToTopBtn;
