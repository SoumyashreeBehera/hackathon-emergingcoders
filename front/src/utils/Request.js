import axios from "axios";

export const getAll = async () => {
  let res = await axios.get("http://localhost:2345/product", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxOTg1OTg3NTY0YzQzMGE2YmEwOWYwNiIsImVtYWlsIjoiYUBnbWFpbC5jb20iLCJuYW1lIjoic29tIiwicGFzc3dvcmQiOiIkMmEkMDgkOGNxZFUxWFFuc2htNHhBdG5ra0xEdVJLMzlhaXljRS5FM1ViZnNxVkR2Y1U4UzFVOHBXUC4iLCJyb2xlcyI6WyJhZG1pbiIsImNvbnZleWVyIl0sImNyZWF0ZWRBdCI6IjIwMjEtMTEtMjBUMDI6MTI6MjMuNDA0WiIsInVwZGF0ZWRBdCI6IjIwMjEtMTEtMjBUMDI6MTI6MjMuNDA0WiJ9LCJpYXQiOjE2Mzc0MDc3OTF9.5xMhzsTCuOLHfAi0zt02dZpMwaLEUvkfN4VLW-55eu4",
    },
  });
  return res.data;
};

export const patchOne = async (id, data) => {
  let res = await axios.patch(`http://localhost:2345/product/${id}`, data, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxOTg1OTg3NTY0YzQzMGE2YmEwOWYwNiIsImVtYWlsIjoiYUBnbWFpbC5jb20iLCJuYW1lIjoic29tIiwicGFzc3dvcmQiOiIkMmEkMDgkOGNxZFUxWFFuc2htNHhBdG5ra0xEdVJLMzlhaXljRS5FM1ViZnNxVkR2Y1U4UzFVOHBXUC4iLCJyb2xlcyI6WyJhZG1pbiIsImNvbnZleWVyIl0sImNyZWF0ZWRBdCI6IjIwMjEtMTEtMjBUMDI6MTI6MjMuNDA0WiIsInVwZGF0ZWRBdCI6IjIwMjEtMTEtMjBUMDI6MTI6MjMuNDA0WiJ9LCJpYXQiOjE2Mzc0MDc3OTF9.5xMhzsTCuOLHfAi0zt02dZpMwaLEUvkfN4VLW-55eu4",
    },
  });
  return res.data;
};
