import React , {useState} from "react";
import { useNavigate } from "react-router-dom";
import {createUser} from "../../../../services/adminServices"
import './CreateUserForm.css';

const CreateUserForm = () => {
  const [userData, setUserData] = useState({email:'', role: '', password: '' });
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  //Regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //no espacios/ unico @
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,16}$/; //al menos(1numeros + 1mayusc + 1minusc)(8-16 caract)

  if (!emailRegex.test(userData.email)) {
      return setMsg("Introduce un email válido");
    }

  if (!passwordRegex.test(userData.password)) {
      return setMsg("La contraseña debe tener al menos 8 caracteres, 1 número y 1 mayúscula");
    }
  try {
      const res = await createUser (userData); // Llama al servicio de login
      alert(res.msg || "¡Tu cuenta ha sido creada!");
      setTimeout(() => navigate('/users'), 1000); // Redirige al perfil
  } catch (error) {
        setMsg(error.msg || 'Error create a user');
      }
  }
  return <form onSubmit={handleSubmit} className="userForm">
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={userData.email}
        onChange={handleChange}
        required
      />
      <select name="role" value={userData.role} onChange={handleChange} required>
        <option value="">Select a role</option>
        <option value="Mkt">Mkt</option>
        <option value="Hr">Hr</option>
        <option value="Admin">Admin</option>
      </select>
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={userData.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Add User</button>
      {msg && <p className="error">{msg}</p>}
  </form>
};

export default CreateUserForm;