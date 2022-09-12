import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Account from "./account/account";
import Orders from "./orders/orders";

function AppRouter() {
    return (
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Navigate to="/orders" />} />
      <Route path="account" element={<Account />} />
      <Route path="orders" element={<Orders />} />
      <Route path="recommendations" element={<Recommendations />} />
    </Routes>
  </BrowserRouter>
);
}

export default AppRouter