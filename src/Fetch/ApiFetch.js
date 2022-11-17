export const fetchData = async () => {
  const fish = await fetch(
    `https://api.rawg.io/api/games?ordering=-metacritic&key=${process.env.REACT_APP_API_KEY}&page=1`
  );
  return fish.json();
};

export const fetchGenre = (para) => async () => {
  const response = await fetch(
    `https://api.rawg.io/api/games?ordering=-metacritic&key=${process.env.REACT_APP_API_KEY}&page=1&genres=${para.genre}`
  );
  return response.json();
};
