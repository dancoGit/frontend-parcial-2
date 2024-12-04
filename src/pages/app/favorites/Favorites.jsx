import NavBarLayout from "../../../components/navBar/NavBarLayout";
import styles from "./Favorites.module.css";
import { useApi } from "../../../context/RickAndMortyApiContext.jsx";
import Card from "../card/Card";
import LabelComponent from "../../../components/label/LabelComponent.jsx";

const Favorites = () => {
  const { favorites, addToFavorite } = useApi();
  return (
    <NavBarLayout>
      {favorites.length > 0 ? (
        <main className={styles.grid}>
          {favorites.map((character) => (
            <Card
              key={character.id}
              name={character.name}
              favorite={true}
              image={character.image}
              addToFavorite={() => addToFavorite(character)}
              id={character.id}
            />
          ))}
        </main>
      ) : (
        <div className={styles.noFavorites}>
          <LabelComponent
            label="Mmm no hay favoritos, agrégate unos, pliss"
            fontSize="30px"
          />
        </div>
      )}
    </NavBarLayout>
  );
};
export default Favorites;
