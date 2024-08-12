import { PiHandHeart } from "react-icons/pi";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <h1>
        Welcome, dear customer{" "}
        <PiHandHeart style={{ color: "blue", fontSize: "24px" }} />
      </h1>
      <p className={css.text}>
        This is my own contact book with the possibility of registration and
        login.
      </p>
    </>
  );
}
