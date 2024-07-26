import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        Hiển thị một vài sp đại diện
      </div>
      <div>
        <h1>Một vài thành phần khác, không cần thiết tách components</h1>
      </div>
      <Footer />
    </div>
  )
}
