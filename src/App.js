
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SignIn from './pages/SignIn';
import { createContext, useEffect, useState } from 'react';
import SignUp from './pages/SignUp';
import Product from './pages/Product';
import ProductDetails from './pages/ProductDetails';
import ProductUpload from './pages/ProductUpload';

const Mycontext = createContext();

function App() {

  const [isToggleSidebar,setIsToggleSidebar]= useState(false);


  const [islogin, setislogin] = useState(false);
  const [ishideheader, setishideheader] = useState(false);

  const values = {
    isToggleSidebar,setIsToggleSidebar,
    islogin, setislogin,
    ishideheader, setishideheader
  }

  useEffect(()=>{
    

  },[isToggleSidebar])
  return (
    <BrowserRouter>
      <Mycontext.Provider value={values}>
        {
          ishideheader !== true && <Header />

        }

        <div className='main d-flex'>
          {
            ishideheader !== true && <div className={`sidebarwrapper ${isToggleSidebar===true ? 'toggle': ''}`}>
              <Sidebar />
            </div>
          }


          <div className={`content ${isToggleSidebar===true ? 'toggle': ''}`}>
            <Routes>
              <Route path="/" exact={true} element={<Dashboard />} />
              <Route path="/dashboard" exact={true} element={<Dashboard />} />
              
              <Route path="/signIn" exact={true} element={<SignIn />} />
              <Route path="/signUp" exact={true} element={<SignUp />} />
              <Route path="/productlist" exact={true} element={<Product />} />
              <Route path="/productview" exact={true} element={<ProductDetails />} />
              <Route path="/productUpload" exact={true} element={<ProductUpload />} />

            </Routes>
          </div>
        </div>
      </Mycontext.Provider>
    </BrowserRouter>
  );
}

export default App;

export { Mycontext }
