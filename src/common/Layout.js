import React from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../screens/admin/components/common/Footer';

const Layout = ({children}) => {
  const path = useLocation().pathname;
  return (
    <>
      {path.includes(`/admin`) ? (
        <>
          <main className="flex justify-center h-screen antialiased bg-gray_95 pb-[120px]">
            {children}
            <Footer/>
          </main>
        </>
      ) : (
        <main className="flex flex-col h-screen max-w-md mx-auto antialiased h-screen relative ">
          {children}
        </main>
      )}
    </>
  )
}

export default Layout