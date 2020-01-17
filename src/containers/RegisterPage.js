import React, {useEffect, useState} from 'react'
import Header from '../components/Global/Header'
import Footer from '../components/Global/Footer'
import Register from '../components/Account/Register'

const RegisterPage = (props) => {
    return(
        <React.Fragment>
            <Header/>
            <Register/>
            <Footer/>
        </React.Fragment>
    )
}

export default RegisterPage;