import React, {useEffect, useState} from "react";
import SearchUser from "./SearchUser/SearchUser";
import AllUsersList from "./AllUsersList/AllUsersList";
import './AllUsers.css';

import { getAllUsers, deleteUserById,} from "../../../services/adminServices";
//  updateUserById FALTA AÑADIR

const AllUsers = () => {
  //ESTADOS
  const [users, setUsers] = useState([]); //Users mostrados API
  
  //LLAMADA API
  useEffect(()=>{
    const fetchUsers = async () => {

      try{
        const data = await getAllUsers ();
        setUsers(data);
      }catch(error){
        console.error("Error fetching users data:", error);
      }
    };
    fetchUsers();
}, []);
 const handleDelete = async (user_id) => {
        try {
            await deleteUserById(user_id);
            setUsers(users => users.filter(u => u.user_id !== user_id));
        } catch (error) {
            console.error(error);
        }
  };

  return <section className="allUsers">
    <h1>Users</h1>
    <div className="search">
      <SearchUser setUsers={setUsers}/>
    </div>
    <AllUsersList users={users} handleDelete={handleDelete}/>
  </section>
};

export default AllUsers;