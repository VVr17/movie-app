import { computed } from "vue";
import { CATEGORIES, DESCRIPTION_TYPES } from "@/constants";

/**
 * Custom composition function for generating description fields based on the category and movie data.
 *
 * @param {string} type - The type of the description (either "short" or "detailed").
 * @param {string} category - The category of the movie (either "movies" or "tv").
 * @param {Object} movie - The movie data object containing relevant information.
 * @returns {Object} - An object containing computed descriptionFields.
 */
export const useDescriptionFields = (type, category, movie) => {
  const descriptionFields = computed(() => {
    // Movie-specific description fields
    if (category === CATEGORIES.movies) {
      const fields = [
        { title: "Release date: ", value: movie.release_date },
        {
          title: "Genres: ",
          value: movie.genres.map(({ name }) => name).join(", "),
        },
        {
          title: "Budget: ",
          value: `${(movie.budget / 1_000_000).toFixed(1)} mln`, // Get budget in millions
        },
        {
          title: "Revenue: ",
          value: `${(movie.revenue / 1_000_000).toFixed(1)} mln`, // Get revenue in millions
        },
      ];

      if (type === DESCRIPTION_TYPES.detailed) {
        fields.push(
          {
            title: "Production companies: ",
            value: movie.production_companies
              .map(({ name }) => name)
              .join(", "),
          },
          {
            title: "Production countries: ",
            value: movie.production_countries
              .map(({ name }) => name)
              .join(", "),
          },
          {
            title: "Home page: ",
            value: "Go to movie",
            href: movie.homepage,
          },
          {
            title: "Popularity: ",
            value: movie.popularity,
          },
          {
            title: "Vote average: ",
            value: movie.vote_average,
          }
        );
      }

      return fields;
    }

    // TV show-specific description fields
    if (category === CATEGORIES.tv) {
      const fields = [
        { title: "First air date: ", value: movie.first_air_date },
        { title: "Last air date: ", value: movie.last_air_date },
        {
          title: "Genres: ",
          value: movie.genres.map(({ name }) => name).join(", "),
        },
        {
          title: "Number of seasons: ",
          value: movie.number_of_seasons,
        },
      ];

      if (type === DESCRIPTION_TYPES.detailed) {
        fields.push(
          {
            title: "Number of episodes: ",
            value: movie.number_of_episodes,
          },
          {
            title: "Created by: ",
            value: movie.created_by.map(({ name }) => name).join(", "),
          },
          {
            title: "Production companies: ",
            value: movie.production_companies
              .map(({ name }) => name)
              .join(", "),
          },
          {
            title: "Production countries: ",
            value: movie.production_countries
              .map(({ name }) => name)
              .join(", "),
          },
          {
            title: "Home page: ",
            value: "Go to movie",
            href: movie.homepage,
          }
        );
      }

      return fields;
    }

    return [];
  });

  return { descriptionFields };
};
