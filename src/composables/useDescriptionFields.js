import { computed } from "vue";
import { CATEGORIES, DESCRIPTION_TYPES } from "@/constants";

/**
 * Custom composition function for generating description fields based on the category and provided data.
 *
 * @param {string} type - The type of the description (either "short" or "detailed").
 * @param {string} category - The category of the data (either "movies", "tv", "people").
 * @param {Object} data - The  data object containing relevant information.
 * @returns {Object} - An object containing computed descriptionFields.
 */
export const useDescriptionFields = (type, category, data) => {
  const descriptionFields = computed(() => {
    // Movie-specific description fields
    if (category === CATEGORIES.movies) {
      const fields = [
        { title: "Release date: ", value: data.release_date },
        {
          title: "Genres: ",
          value: data.genres.map(({ name }) => name).join(", "),
          collection: data.genres,
        },
        {
          title: "Budget: ",
          value: `${(data.budget / 1_000_000).toFixed(1)} mln`, // Get budget in millions
        },
        {
          title: "Revenue: ",
          value: `${(data.revenue / 1_000_000).toFixed(1)} mln`, // Get revenue in millions
        },
      ];

      if (type === DESCRIPTION_TYPES.detailed) {
        fields.push(
          {
            title: "Production companies: ",
            value: data.production_companies.map(({ name }) => name).join(", "),
          },
          {
            title: "Production countries: ",
            value: data.production_countries.map(({ name }) => name).join(", "),
          },
          {
            title: "Home page: ",
            value: "Homepage",
            href: data.homepage,
          },
          {
            title: "Popularity: ",
            value: data.popularity,
          },
          {
            title: "Vote average: ",
            value: data.vote_average,
          }
        );
      }

      return fields;
    }

    // TV show-specific description fields
    if (category === CATEGORIES.tv) {
      const fields = [
        { title: "First air date: ", value: data.first_air_date },
        { title: "Last air date: ", value: data.last_air_date },
        {
          title: "Genres: ",
          value: data.genres.map(({ name }) => name).join(", "),
          collection: data.genres,
        },
        {
          title: "Number of seasons: ",
          value: data.number_of_seasons,
          hasSeasons: true,
        },
      ];

      if (type === DESCRIPTION_TYPES.detailed) {
        fields.push(
          {
            title: "Number of episodes: ",
            value: data.number_of_episodes,
          },
          {
            title: "Created by: ",
            value: data.created_by.map(({ name }) => name).join(", "),
          },
          {
            title: "Production companies: ",
            value: data.production_companies.map(({ name }) => name).join(", "),
          },
          {
            title: "Production countries: ",
            value: data.production_countries.map(({ name }) => name).join(", "),
          },
          {
            title: "Home page: ",
            value: "Homepage",
            href: data.homepage,
          }
        );
      }

      return fields;
    }

    // People specific description fields
    if (category === CATEGORIES.people) {
      const fields = [
        { title: "Date of birth: ", value: data.birthday },
        { title: "Place of birth: ", value: data.place_of_birth },
        { title: "Department: ", value: data.known_for_department },
      ];

      if (type === DESCRIPTION_TYPES.detailed) {
        fields.push({ title: "Popularity: ", value: data.popularity });
      }
      return fields;
    }

    return [];
  });

  return { descriptionFields };
};
