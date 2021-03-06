import React, {useEffect, useState} from 'react'
import Header from '../components/Global/Header'
import Footer from '../components/Global/Footer'
import Login from '../components/Account/Login'

const LoginPage = (props) => {
    return(
        <React.Fragment>
            <Header/>
            <Login/>
            <Footer/>
        </React.Fragment>
    )
}

export default LoginPage;