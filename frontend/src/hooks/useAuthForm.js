import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";

export const useAuthForm = ({endpoint,redirectTo, defaultRole="user"})=>{
  const navigate = useNavigate();

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: defaultRole, // default role is user
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

      const res = await fetch(`${api}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      alert(data.message);
      setFormData({
        name: "",
        email: "",
        password: "",
        role: defaultRole,
      })
      navigate(redirectTo);
  };
  return{
        formData,
        handleChange,
        handleSubmit
    }
}