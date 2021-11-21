export const GetLocal = () => {
  let token = localStorage.getItem("token");
  if (token === null) {
    return "";
  } else {
    token = JSON.parse(localStorage.getItem("token"));
    return token;
  }
};

export const SetLocal = (e) => {
  localStorage.setItem("token", JSON.stringify(e));
};
