import { useParams } from "react-router-dom";
import LabelComponent from "../../../components/label/LabelComponent";
import NavBarLayout from "../../../components/navBar/NavBarLayout";
import { getCharacter } from "../../../service/rickAndMortyApi";
import { useCallback, useEffect, useState } from "react";
import styles from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState({
    id: 0,
    name: "",
    species: "",
    gender: "",
    origin: {
      name: "",
    },
    location: {
      name: "",
    },
  });

  const fetchCharacter = useCallback(() => {
    getCharacter(id).then(
      (response) => {
        setCharacter(response);
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchCharacter();
  }, [fetchCharacter]);

  return (
    <NavBarLayout>
      <div className={styles.container}>
        <div className={styles.divImage}>
          <img
            src={character.image}
            alt={character.name}
            title={character.name}
            className={styles.characterImage}
          />
        </div>
        <div className={styles.info}>
          <span>
            <LabelComponent label="Id:" />
            <LabelComponent label={character.id} color="white" />
          </span>

          <span>
            <LabelComponent label="Nombre:" />
            <LabelComponent label={character.name} color="white" />
          </span>
          <span>
            <LabelComponent label="Especie:" />
            <LabelComponent label={character.species} color="white" />
          </span>
          <span>
            <LabelComponent label="Género:" />
            <LabelComponent label={character.gender} color="white" />
          </span>
          <span>
            <LabelComponent label="Origen:" />
            <LabelComponent label={character.origin.name} color="white" />
          </span>
          <span>
            <LabelComponent label="Ubicación:" />
            <LabelComponent label={character.location.name} color="white" />
          </span>
        </div>
      </div>
    </NavBarLayout>
  );
};
export default Detail;
