import React,{useState} from "react";
// import { useNavigate } from "react-router-dom";
import {getUserByName} from "../../../../services/adminServices"
import './SearchUser.css';


const SearchUser = ({setUsers}) => {
  const [input, setInput] = useState("");

  const handleSearch = async () => {
    if (input.trim() === "") return;

    const data = await getUserByName(input.trim());
    setUsers(data);  // el backend devuelve 1 elemento → lo metemos en lista
  };
  
  return <div className="searchUser">
    <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search User..."
      />
    <button onClick={handleSearch} className="botonBuscar">Search</button>
  </div>
};

export default SearchUser;