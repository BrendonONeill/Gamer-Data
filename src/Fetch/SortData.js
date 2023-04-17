export const qsGames = (games, value, low, high) => {
  if (low > high) {
    return;
  }
  const pivotIndex = partition(games, value, low, high);

  qsGames(games, value, low, pivotIndex - 1);
  qsGames(games, value, pivotIndex + 1, high);
  return games;
};

function partition(games, value, low, high) {
  const pivot = games[high][value];
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (games[j][value] >= pivot) {
      i++;
      [games[i], games[j]] = [games[j], games[i]];
    }
  }
  [games[i + 1], games[high]] = [games[high], games[i + 1]];
  return i + 1;
}
