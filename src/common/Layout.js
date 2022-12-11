import React from 'react'
import Footer from '../screens/admin/components/common/Footer';

const Layout = ({children}) => {

  return (
          <main className="flex justify-center h-screen antialiased bg-gray_95 pb-[120px]">
            {children}
            <Footer/>
          </main>
  )
}

export default Layout