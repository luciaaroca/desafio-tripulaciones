import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom'

import AdminDashboard from "./AdminDashboard/AdminDashboad";
import CreateUserContainer from "./CreateUserContainer/CreateUserContainer"
import Users from "./Users/Users"

const Main = () => {
  return <main>
    <Routes>
        <Route path='/'element={<AdminDashboard/>}/>
        <Route path='/createuser'element={<CreateUserContainer/>}/>
        <Route path='/users'element={<Users/>}/>
    </Routes>
  </main>;
};

export default Main;