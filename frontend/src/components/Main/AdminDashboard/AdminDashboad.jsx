import React from "react";
import { Link } from 'react-router-dom'
import {logout} from '../../../services/authServices'




const AdminDashboard = () => {
  
  return <section className="adminDashboard">
      <h1>Hello Admin!</h1>
      <div className="adminButtons">
        {/* <button onClick={handleLogout} >Log Out</button> */}
        <button ><Link to="/users" >View all Users</Link> </button>
        <button><Link to="/createuser">Add User</Link></button>
      </div>

  </section>
};

export default AdminDashboard;