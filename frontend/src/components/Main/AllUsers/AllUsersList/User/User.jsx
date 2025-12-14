import React from "react";



const User = ({user, handleDelete}) => {

  const email = user.email;
  const id = user.user_id;
  const role =user.role;
  const password =user.password;

  return <article className="userItem">
    <h3>{email}</h3>
    <p>{id}</p>
    <p>{role}</p>
    <p>{password}</p>
    <p>Funciona correctamente</p>

    <button onClick={() => handleDelete(user.user_id)} className="deleteButton">Borrar</button>
  </article>
};

export default User;