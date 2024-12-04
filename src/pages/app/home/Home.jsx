import styles from "./Home.module.css";
import { useApi } from "../../../context/RickAndMortyApiContext.jsx";
import Card from "../card/Card.jsx";
import NavBarLayout from "../../../components/navBar/NavBarLayout.jsx";

const Home = () => {
   const { characters, favorites, addToFavorite } =
    useApi();

  function isItAFavorite(id) {
    let i = 0;
    let len = favorites.length;
    let found = false;

    while (i < len) {
      if (id === favorites[i] || i === 200) {
        delete favorites[i];
        found = true;
        break;
      }
      i++;
    }

    return found;
  }

  return (
    <NavBarLayout>
      <main className={styles.grid}>
        {characters.map((character) => (
          <Card
            key={character.id}
            name={character.name}
            favorite={isItAFavorite(character.id)}
            image={character.image}
            addToFavorite={() => addToFavorite(character)}
            id={character.id}
          />
        ))}
      </main>
    </NavBarLayout>
  );
};
export default Home;
