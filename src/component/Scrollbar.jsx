import React from "react";
import styles from "./Scrollbar.module.css";

export default function Scrollbar() {
  const handleleft = (e) => {
    e.preventDefault();
    document.getElementById("demo").scrollLeft -= 100;
  };

  const handleright = (e) => {
    e.preventDefault();
    document.getElementById("demo").scrollLeft += 100;
  };

  return (
    <>
      <div className={styles.mainDiv} id="demo">
        {[...Array(20)].map((_, index) => (
          <div key={index}>
            <div className={styles.box}>{index + 1}</div>
          </div>
        ))}
      </div>
      <div className={styles.btn}>
        <button onClick={handleleft}>Left</button>
        <button onClick={handleright}>Right</button>
      </div>
    </>
  );
}
