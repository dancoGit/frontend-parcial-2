import styles from "./Card.module.css";
import { useApi } from "../../../context/RickAndMortyApiContext";
import ButtonSubmitComponent from "../../../components/button/ButtonComponent";
import { useNavigate } from "react-router-dom";

const Card = ({ name, favorite, image, addToFavorite, id }) => {
  const { deleteToFavorite } = useApi();

  const navigate = useNavigate(id);

  const handleDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <article className={styles.article}>
      <div>
        <img src={image} alt={name} className={styles.img} />
      </div>
      <div>
        <h2 className={styles.titleCard}>{name}</h2>
      </div>
      <div className={styles.favorites}>
        {favorite ? (
          <ButtonSubmitComponent
            label="Quitar"
            onClick={() => deleteToFavorite(id)}
          />
        ) : (
          <>
            <ButtonSubmitComponent
              label="Ver detalle"
              onClick={() => handleDetail(id)}
            />
            <ButtonSubmitComponent label="Agregar" onClick={addToFavorite} />
          </>
        )}
      </div>
    </article>
  );
};
export default Card;
