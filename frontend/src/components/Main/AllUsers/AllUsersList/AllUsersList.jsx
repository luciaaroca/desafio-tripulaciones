import React from "react";
import User from "./User/User"
import './AllUsersList.css';



const AllUsersList = ({users,handleDelete}) => {
  const renderCard = () => users.map(user => <User key={user.user_id} user={user} handleDelete={handleDelete}/>)
  return <div>
      <section className="userList">
      {renderCard()}
      </section>
  </div>
};

export default AllUsersList;