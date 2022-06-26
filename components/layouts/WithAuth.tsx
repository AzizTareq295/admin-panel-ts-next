import React from 'react'
import Header from 'components/shared/header/header'
import Sidebar from 'components/shared/sidebar/sidebar'
import Footer from 'components/shared/footer/footer'

type PropType = {
  children: React.ReactNode
}

const WithAuth: React.FC<PropType> = ({children}) => {
  return (
    <div className="admin-template">
      <Header />
      <Sidebar />
      <div className='content'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default WithAuth