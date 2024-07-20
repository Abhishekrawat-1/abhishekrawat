import React from 'react';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const Homepage = lazy(() => import('./Pages/Homepage'));
const Blogpost = lazy(() => import('./Pages/Blogpost'));
const Login= lazy(()=> import('./components/login/Login'));
const Dashboard= lazy(()=> import('./components/Dasboard/Dashboard'));
const Posts= lazy(()=> import('./Pages/Posts'));
function App() {
  return (
    <div className="App">
<Router>
<Suspense fallback={<div>Loading...</div>}>
  <Routes>
    <Route path='/' element={<Homepage/>} />
    <Route path='/blog/:id' element={<Blogpost/>} />
    <Route path='/posts' element={<Posts/>} />
    <Route path='/login' element={<Login/>} />
    {/* <Route path='/dashboard' element={<Dashboard/>} /> */}
    < Route element={<PrivateRoute/>}>
    <Route path='/dashboard' element={<Dashboard/>} />
    </Route>
  </Routes>
  </Suspense>
</Router>

    </div>
  );
}

export default App;
