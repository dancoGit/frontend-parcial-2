import LabelComponent from "../../components/label/LabelComponent.jsx";
import styles from "./Authenticate.module.css";
import FormAuthenticate from "./FormAuthenticate.jsx";
import FormRegister from "./FormRegister.jsx";
import { useAuthenticateContext } from "../../context/AuthenticateContext.jsx";

const Authenticate = () => {
  const { isAuthenticate } = useAuthenticateContext();

  return (
    <>
      <main>
        <img
          src="./src/assets/img/rick-and-morty-logo-png.png"
          className={styles.logo}
        />
        <div className={styles.container}>
          <div className={styles.title}>
            <h1>
              <LabelComponent
                label="Acceso restringido para adultos"
                fontSize="30px"
              />
            </h1>
          </div>
          <div className={styles.containerForms}>
            <div className={styles.image}>
              {isAuthenticate ? (
                <>
                  <img src="./src/assets/img/authenticate.png" />
                </>
              ) : (
                <>
                  <img src="./src/assets/img/register.png" />
                </>
              )}
            </div>
            <div className={styles.form}>
              {isAuthenticate ? <FormAuthenticate /> : <FormRegister />}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Authenticate;
