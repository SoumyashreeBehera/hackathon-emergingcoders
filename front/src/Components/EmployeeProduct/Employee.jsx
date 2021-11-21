import React, { useEffect, useState } from "react";
import { GetLocal } from "../../utils/LocalStorage";
import { getAll, patchOne } from "../../utils/Request";
import styles from "./Employee.module.css";
import { useNavigate } from "react-router-dom";

export default function Employee() {
  const [data, setData] = useState([]);
  const [tokenData, setTokenData] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    let token = checkLocalStorage();
    fun(token);
  }, []);

  function checkLocalStorage() {
    let token = GetLocal();
    if (token !== "") {
      setTokenData(token);
      return token;
    } else {
      setTokenData("");
      navigate("/login");
    }
  }

  async function fun(token) {
    let objs = await getAll(token);
    setData(objs.data);
  }
  const handleStatusChange = async (id) => {
    let changeData = { onwayStatus: true };
    let data = await patchOne(id, changeData, tokenData);
    fun(tokenData);
  };

  const handleDeliveryStatusChange = async (id) => {
    let changeData = { deliveryStatus: true };
    let data = await patchOne(id, changeData, tokenData);
    fun(tokenData);
  };

  return (
    <div className={styles.sectionBox}>
      <div className={styles.productBox}>
        {data.map((el, i) => (
          <div className={styles.eachBox}>
            <div>{el.name}</div>
            <div>{el.phnNo}</div>
            <div>{`${el.onwayStatus}`}</div>
            <button
              disabled={i !== 0}
              onClick={() => handleStatusChange(el._id)}
            >
              start delivering
            </button>
            <button
              disabled={i !== 0}
              onClick={() => handleDeliveryStatusChange(el._id)}
            >
              delivered
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
