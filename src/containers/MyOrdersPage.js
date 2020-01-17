import React, { useState, useEffect } from 'react'
import Header from '../components/Global/Header'
import Footer from '../components/Global/Footer'
import MyOrders from '../components/Account/MyOrders'

const MyOrdersPage = (props) => {
    return (
       <React.Fragment>
           <Header/>
           <MyOrders/>
           <Footer/>
       </React.Fragment>
    )
}

export default MyOrdersPage;