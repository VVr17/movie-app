/**
 * Create season options to choose
 *
 * @param {number} quantity - number of seasons
 * @returns {Array} - array of seasons options
 */
export const getSeasons = (quantity) => {
  let seasons = [];

  for (let i = 1; i <= quantity; i++) {
    seasons.push({ label: `Season ${i}`, id: i });
  }

  return seasons;
};
