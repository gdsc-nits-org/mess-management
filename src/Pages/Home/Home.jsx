import { Button, Input } from "../../Components";
import style from "./Home.module.scss";
const Home = () => {
  return (
    <main className={style.home}>
      <h1>Home Page</h1>
      <Button type="primary" />
      <Button type="secondary" />
      <Input type="text" value="ok" />
    </main>
  );
};

export default Home;
