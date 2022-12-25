import React from "react"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header";
import Main from "./pages/Main"
import Catalog from './pages/Catalog';
import CatalogDetail from './components/CatalogDetail';
import Profile from './pages/Profile';
import Payment from "./pages/Payment";
import { useCurrentUser } from './hooks/useUserData';
import ActivatePromocode from './pages/ActivatePromocode';

export const App = () => {
  const {isAuth} = useCurrentUser()

  return (
    <>
      <Header />
      <div className="container mx-auto flex items-center pt-12">
        <Routes>
          <Route path='/' element={isAuth ? <Main /> : <div>Форма авторизации</div>} />
          <Route path='/subscribe' element={<Main />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/catalog/:id' element={<CatalogDetail />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/sign-in' element={<Main />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/activate-promocode' element={<ActivatePromocode />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
