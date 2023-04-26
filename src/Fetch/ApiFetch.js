// These are my api calls using React Query
export const fetchData = async ({ pageParam = 1 }) => {
  const data = await fetch(
    `https://concerned-shirt-dog.cyclic.app/gamer/main/cat`,
    {
      headers: {
        page: `${pageParam}`,
      },
    }
  );
  return data.json();
};

export const fetchGenre = async ({ pageParam = 1, queryKey }) => {
  const genre = queryKey[1];
  const dataG = await fetch(
    `https://concerned-shirt-dog.cyclic.app/gamer/fetchGenre`,
    {
      headers: {
        page: `${pageParam}`,
        genre: `${genre}`,
      },
    }
  );
  return dataG.json();
};

export const fetchId = async ({ pageParam = 1, queryKey }) => {
  const searchTerm = queryKey[1];
  const dataID = await fetch(
    `https://concerned-shirt-dog.cyclic.app/gamer/fetchId`,
    {
      headers: {
        page: `${pageParam}`,
        search: `${searchTerm}`,
      },
    }
  );
  return dataID.json();
};
