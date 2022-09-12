import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import Account from "./account/account";
import Orders from "./orders/orders";
import Recommendations from "./recommendations/recommendations";
import UserContext from "./UserContext/userContext";


function AppRouter() {
  const[value, setValue] = useState("0");
    return (
    <BrowserRouter>
        <UserContext.Provider value={{value, setValue}}>
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
          <Routes>
            <Route path="/" element={<Navigate to="/orders" />} />
            <Route path="account" element={<Account />} />
            <Route path="orders" element={<Orders />} />
            <Route path="recommendations" element={<Recommendations />} />
            </Routes>
        </UserContext.Provider>
    </BrowserRouter>
  );
}

export default AppRouter