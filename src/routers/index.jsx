import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePageLayout from '../layouts/HomePageLayout'
import Home from '../pages/Home'


const Routers = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth <= 768; // Adjust the threshold as needed
      setIsMobile(isMobileDevice);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <Routes>
      {isMobile ? (
            <Route exact path="/" element={<div>Laptop/Desktop Recommeded</div>} />
          ) : (
            <>
              <Route element={<HomePageLayout />}>
                <Route path='/' element={<Home />} />
              </Route>
            </>
          )
      }
    </Routes>
  )
}

export default Routers
