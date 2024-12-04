export const getCharacters = async () => {
  try {
    const endPoint = "https://rickandmortyapi.com/api/character";
    const response = await fetch(endPoint);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getCharacter = async (id) => {
  try {
    const endPoint = `https://rickandmortyapi.com/api/character/${id}`;
    const response = await fetch(endPoint);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
