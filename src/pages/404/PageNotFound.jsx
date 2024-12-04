import { useNavigate } from "react-router-dom";
import LabelComponent from "../../components/label/LabelComponent";
import LabelLinkComponent from "../../components/label/LabelLinkComponent";
import styles from "./PageNotFound.module.css";

const PageNotFound = () => {

  const navigate = useNavigate();

  const onCliclAutenticate = () => {
    navigate("/");
  }

  return (
    <div className={styles.errorContainer}>
      <LabelComponent
        label="404 Page Not Encontrada ..."
        fontSize="50px"
      ></LabelComponent>
      <div className={styles.image}>
        <img src="./src/assets/img/pageNotFound.png" />
      </div>
      <span>
        <LabelLinkComponent
          label="Go al login!"
          fontSize="30px"
          onClick={onCliclAutenticate}
        ></LabelLinkComponent>
      </span>
    </div>
  );
};
export default PageNotFound;
