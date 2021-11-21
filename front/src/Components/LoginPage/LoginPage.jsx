import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetLocal, SetLocal } from "../../utils/LocalStorage";
import { Login } from "../../utils/Request";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    checkLocalStorage();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      email: email,
      password: password,
    };
    let resData = await Login(data);
    SetLocal(resData.token);
    navigate("/employee");
  };

  function checkLocalStorage() {
    let token = GetLocal();
    if (token !== "") {
      navigate("/employee");
    }
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <br />
      <input
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <br />
      <input type="submit" />
    </form>
  );
}
