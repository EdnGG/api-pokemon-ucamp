import React, { useEffect, useState } from "react";
import { db } from "../../src/firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

const Data = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    onSnapshot(collection(db, "usuarios"), (snapshot) => {
      setData(
        snapshot.docs.map((doc) => {
          console.log(doc.data());
          console.log(doc.id);
          return { ...doc.data(), id: doc.id };
        })
      );
      console.log(data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Este es el Data</h1>
      {/* <button onClick={() => addData(newUser)}>Add</button> */}
      {
        // data &&
        data.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.user}</h2>
              <p>{item.id}</p>
            </div>
          );
        })
      }
    </>
  );
};

export default Data;
