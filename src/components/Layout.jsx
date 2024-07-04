import React from 'react';
   import NavBar from './NavBar'; // Import your navigation bar component

   const Layout = ({ children }) => {
     return (
       <div className='p-5'>
         <NavBar /> {/* Render the navigation bar */}
         <main>{children}</main> {/* Render the content of the current page */}
       </div>
     );
   };

   export default Layout;