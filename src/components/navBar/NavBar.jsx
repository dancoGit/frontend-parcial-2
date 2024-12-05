import styles from "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import LabelComponent from "../../components/label/LabelComponent";
import LabelLinkComponent from "../../components/label/LabelLinkComponent";
import logo from "../../../src/assets/img/rick-and-morty-logo-4.png";
import {logOut} from "../../service/db";

const NavBar = () => {
  const fontSize = "25px";

  const navigate = useNavigate();

  const onClickLogout = (event) => {
    event.preventDefault();
    logOut();
    navigate("/");
  };

  return (
    <div className={styles.containerNavBar}>
      <div>
        <img
          src={logo}
          className={styles.logo}
          alt="Ricky and Morty"
          title="Ricky and Morty"
        />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/home">
              <LabelComponent
                label="Inicio"
                color="white"
                fontSize={fontSize}
                cursor="pointer"
              />
            </Link>
          </li>
          <li>
            <Link to="/favorites">
              <LabelComponent
                label="Favoritos"
                color="white"
                fontSize={fontSize}
                cursor="pointer"
              />
            </Link>
          </li>
          <li>
            <Link to="/about">
              <LabelComponent
                label="Mis datos"
                color="white"
                fontSize={fontSize}
                cursor="pointer"
              />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="logout">
        <nav>
          <ul>
            <li>
              <LabelLinkComponent
                label="Desconectarse"
                color="white"
                fontSize={fontSize}
                onClick={onClickLogout}
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default NavBar;
