import axios from "axios";

export const getAll = async (token) => {
  let res = await axios.get("http://localhost:2345/product", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const patchOne = async (id, data, token) => {
  let res = await axios.patch(`http://localhost:2345/product/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const Login = async (data) => {
  let res = await axios.post(`http://localhost:2345/login`, data);
  console.log(res.data);
  return res.data;
};
