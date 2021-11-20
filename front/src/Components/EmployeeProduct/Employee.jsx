import React, { useEffect, useState } from "react";
import { getAll, patchOne } from "../../utils/Request";
import styles from "./Employee.module.css";

export default function Employee() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fun();
  }, []);
  async function fun() {
    let objs = await getAll();
    console.log(objs);
    setData(objs.data);
  }
  const handleStatusChange = async (id) => {
    let changeData = { onwayStatus: true };
    let data = await patchOne(id, changeData);
    fun();
  };

  const handleDeliveryStatusChange = async (id) => {
    let changeData = { deliveryStatus: true };
    let data = await patchOne(id, changeData);
    fun();
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
