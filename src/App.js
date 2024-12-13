
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SignIn from './pages/SignIn';
import { createContext, useState } from 'react';
import SignUp from './pages/SignUp';

const Mycontext = createContext();

function App() {
  const [islogin, setislogin] = useState(false);
  const [ishideheader, setishideheader] = useState(false);

  const values = {
    islogin, setislogin,
    ishideheader, setishideheader
  }
  return (
    <BrowserRouter>
      <Mycontext.Provider value={values}>
        {
          ishideheader !== true && <Header />

        }

        <div className='main d-flex'>
          {
            ishideheader !== true && <div className='sidebarwrapper'>
              <Sidebar />
            </div>
          }


          <div className='content full'>
            <Routes>
              <Route path="/" exact={true} element={<Dashboard />} />
              <Route path="/dashboard" exact={true} element={<Dashboard />} />
              <Route path="/product/upload" exact={true} element={<Dashboard />} />
              <Route path="/signIn" exact={true} element={<SignIn />} />
              <Route path="/signUp" exact={true} element={<SignUp />} />

            </Routes>
          </div>
        </div>
      </Mycontext.Provider>
    </BrowserRouter>
  );
}

export default App;

export { Mycontext }
