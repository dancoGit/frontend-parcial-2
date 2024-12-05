import NavBarLayout from "../../../components/navBar/NavBarLayout";
import styles from "./AboutMe.module.css";
import { getUserLoggedIn } from "../../../service/db";
import LabelComponent from "../../../components/label/LabelComponent";
import { useEffect, useState } from "react";

const AboutMe = () => {
  const [userLoggedIn, setUserLoggedIn] = useState({});

  useEffect(() => {
    setUserLoggedIn(getUserLoggedIn());
  }, []);

  return (
    <NavBarLayout>
      {userLoggedIn ? (
        <div className={styles.container}>
          <div className={styles.info}>
            <span>
              <LabelComponent label="Nombre:" />
              <LabelComponent label={userLoggedIn.fullName} color="white" />
            </span>

            <span>
              <LabelComponent label="Dirección:" />
              <LabelComponent label={userLoggedIn.address} color="white" />
            </span>
            <span>
              <LabelComponent label="Especie:" />
              <LabelComponent label={userLoggedIn.email} color="white" />
            </span>
            <span>
              <LabelComponent label="Género:" />
              <LabelComponent label={userLoggedIn.password} color="white" />
            </span>
          </div>
        </div>
      ) : (
        <LabelComponent label="Ah ocurrido un error, consulte a su administrador, por su atención mil gracias, besitos, chao!!!" />
      )}
    </NavBarLayout>
  );
};
export default AboutMe;
