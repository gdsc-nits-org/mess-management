import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Notice.module.scss";
import { Card, SearchBar } from "../../Components";

const Notice = () => {
  const [notice, setNotice] = useState([]);
  const [error, setError] = useState("");
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const { data: response } = await axios.get("http://localhost:5000/api/v1/notice");
        setNotice(response);
      } catch (err) {
        setError(`${err.message}`);
      }
    };
    fetchdata();
  }, []);
  return (
    <>
      <div className={styles.heading}>Notice Board</div>
      <div className={styles.searchBarC}>
        <SearchBar
          calender="true"
          width="15rem"
          height="2rem"
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <div className={styles.dropdown}>
        <select name="sort" id="sort">
          <option className={styles.text} value="All Notices" selected>
            All Notices
          </option>
          <option className={styles.text} value="New Notices">
            New Notices
          </option>
          <option className={styles.text} value="Bookmarked Notices">
            Bookmarked Notices
          </option>
        </select>
      </div>
      {error ? (
        <div>error</div>
      ) : (
        <div className={styles.container}>
          {notice &&
            notice.map((note) => {
              return (
                <Card
                  key={note.createdAt}
                  date={note.createdAt}
                  text={note.desp}
                  summary={note.summary}
                />
              );
            })}
        </div>
      )}
    </>
  );
};

export default Notice;
