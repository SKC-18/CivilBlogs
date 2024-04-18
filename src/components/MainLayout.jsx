import React, { children } from 'react';
import Header  from './Header';
import  Footer  from './Footer';
export const MainLayout = () => {
  return (
    <div>
        <Header />
        {children}
        <Footer />

    </div>
  )
}
