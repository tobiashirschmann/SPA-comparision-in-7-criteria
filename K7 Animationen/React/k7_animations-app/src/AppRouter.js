import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  Link,
} from "react-router-dom";
import Account from "./account/account";
import Orders from "./orders/orders";
import Recommendations from "./recommendations/recommendations";
import UserContext from "./UserContext/userContext";
import './AppRouter.css';
import {AnimatePresence} from 'framer-motion'


function AppRouter() {
  
  const[value, setValue] = useState("0");

    return (

      <div className="App">
        <UserContext.Provider value={{value, setValue}}>
          <BrowserRouter>
            <h1>{value} Artikel im Warenkorb</h1>
            <nav>
            <div>
              <ul>
                <li><Link to="/orders"> Meine Bestellungen </Link></li>
                <li><Link to="/account"> Mein Konto </Link></li>
                <li><Link to="/recommendations"> Empfehlungen </Link></li>
            </ul>
            </div>
            </nav>
          <AnimatedSwitch />
      </BrowserRouter>
      </UserContext.Provider>
    </div>
);
}


const AnimatedSwitch = () => {
  const location = useLocation();
  console.log("location", location);
  return (

    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to="/orders" />} />        
          <Route path="account" element={<Account />} />      
          <Route path="orders" element={<Orders />} />
          <Route path="recommendations" element={<Recommendations />} />
        </Routes>
      </AnimatePresence>

  );
};


export default AppRouter