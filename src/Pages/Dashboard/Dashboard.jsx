import React, {useState} from 'react'
import Navbar from '../../Components/navbar/Navbar'
import NavPopUp from '../../Components/navPopUp/NavPopUp'
import './Dashboard.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PaymentMethod from '../Payment Method/PaymentMethod';
import Transaction from '../Transaction/Transaction';

const Dashboard = () => {
  const [clickNav,setClickNav] = useState(false)
  return (
    <div>
            <Navbar clickNav={clickNav} setClickNav={setClickNav} />
            <NavPopUp clickNav={clickNav} setClickNav={setClickNav}/>
    </div>
  )
}

export default Dashboard