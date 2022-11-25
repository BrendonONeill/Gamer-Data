// These are my api calls using React Query
export const fetchData = async ({ pageParam = 1 }) => {
  const data = await fetch(
    `https://api.rawg.io/api/games?ordering=-metacritic&key=${process.env.REACT_APP_API_KEY}&page=${pageParam}`
  );
  return data.json();
};

export const fetchGenre = async ({ pageParam = 1, queryKey }) => {
  const genre = queryKey[1];
  const dataG = await fetch(
    `https://api.rawg.io/api/games?ordering=-metacritic&key=${process.env.REACT_APP_API_KEY}&page=${pageParam}&genres=${genre}`
  );
  return dataG.json();
};

export const fetchId = async ({ pageParam = 1, queryKey }) => {
  const searchTerm = queryKey[1];
  const dataID = await fetch(
    `https://api.rawg.io/api/games?ordering=-metacritic&key=${process.env.REACT_APP_API_KEY}&search=${searchTerm}&ordering=-metacritic&&page=${pageParam}`
  );
  return dataID.json();
};
