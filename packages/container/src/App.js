import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import MarketingApp from './components/MarketingApp'
import Header from './components/Header'
export default () =>{
    console.log('test!!!')
    return (
        <BrowserRouter>
            <Header />
            <MarketingApp />
        </BrowserRouter>
       
    )
}