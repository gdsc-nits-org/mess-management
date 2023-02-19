import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Notice.modules.scss";
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
  console.log(notice);
  return (
    <div className={styles.container}>
      {notice &&
        notice.map(({ desp, summary, date }) => {
          return <Card key={date} date={date} text={desp} summary={summary} />;
        })}
    </div>
  );
};

export default Notice;
