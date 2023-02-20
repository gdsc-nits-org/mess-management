import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Notice.module.scss";
import { Card } from "../../Components/index";

const Notice = () => {
  const [notice, setNotice] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const { data: response } = await axios.get("http://localhost:5000/api/v1/notice");
        setNotice(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);
  return (
    <>
      <div className={styles.heading}>Notice Board</div>
      <div className={styles.container}>
        {notice &&
          notice.map((note) => {
            return (
              <Card
                key={note.date}
                date={note.createdAt}
                text={note.desp}
                summary={note.summary}
              />
            );
          })}
      </div>
    </>
  );
};

export default Notice;
