import React from 'react'
import Navbar from '../components/Navbar/Navbar.Component';

const DefaultLayoutHoc = 
(Component) =>
    ({...props})=> {
  return (
  <div>
    <Navbar />
   <Component {...props} />
   <div></div>
  </div>
  );
}

export default DefaultLayoutHoc;

