import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

import { Header } from "../src/components/Header/Header";
import { Products } from './pages/Products/Products';
import { Home } from './pages/Home/Home';
import { Shops } from './pages/Shops/Shops';
import { Brands } from './pages/Brands/Brands';
import { Contact } from './pages/Contact/Contact';
import { Favorite } from './pages/Favorite/Favorite';
import { Signup } from './pages/Signup/Signup';
import { Footer } from './components/Footer/Footer';
import { Sales } from './pages/Sales/Sales';
import { Profile } from './pages/Profile/Profile';
import { UserSettings } from './pages/Profile/UserSettings/UserSettings';
import { Cart } from './pages/Cart/Cart';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Product } from './pages/Products/Product';
import { Order } from './pages/Order/Order';

import { collection, getDocs } from "firebase/firestore";
import { firestore } from './firebase.config';

function App() {
  const {user} = useSelector((state: RootState) => state.auth);

  const usersSnapshot = getDocs(collection(firestore, "user"));

  usersSnapshot.then(resolve => {
    resolve.forEach(user => {
      console.log(`User ID: ${user.id}\nUser data - ${user.get("name")}`);
    });
  })

  return (
    <>
      <Header/>
        { user?.email === "admin@admin.com" ?
          <Routes>
            <Route path="/dashboard" element={ <Dashboard /> } /> 
          </Routes> : 
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/signup" element={ <Signup /> } />
            <Route path="/products" element={ <Products /> } />
            <Route path="/product/:id" element={ <Product /> } />
            <Route path="/cart" element={ <Cart /> } />
            <Route path="/order" element={ <Order /> } />
            <Route path="/shops" element={ <Shops /> } />
            <Route path="/brands" element={ <Brands /> } />
            <Route path="/contact" element={ <Contact /> } />
            <Route path="/favorite" element={ <Favorite /> } />
            <Route path="/sales" element={ <Sales /> } />
            <Route path="/profile" element={ <Profile /> } />
            <Route path="/profile/settings" element={ <UserSettings /> } />
          </Routes>
        }
      <Footer />
    </>
  );
}

export default App;
