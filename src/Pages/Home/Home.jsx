import { Button, Input, Card } from "../../Components";
import style from "./Home.module.scss";
const Home = () => {
  return (
    <main className={style.home}>
      <h1>Home Page</h1>
      <Button type="button" />
      <Input type="text" value="ok" />
      <Card
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repudiandae a veritatis eos nisi eligendi dolorum. Corporis commodi, voluptas, quo quisquam nihil veritatis sed cum, natus repellat tempora dolores consequuntur"
        date="21.01.2023 11:30am"
      />
    </main>
  );
};

export default Home;
