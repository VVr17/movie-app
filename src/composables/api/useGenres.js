import { ref } from "vue";
import { api } from "@/services/axiosConfig";
import { GENRES_MOVIE_URL, GENRES_TV_URL } from "@/constants";

/**
 * Composable for handling API genres data retrieval.
 *
 * @returns {Object} - An object containing reactive references to movieGenres, tvGenres and a function to fetch data.
 */
export const useGenres = () => {
  const movieGenres = ref([]);
  const tvGenres = ref([]);

  /**
   * Fetches movies and tv genres
   */
  const fetchGenres = async () => {
    try {
      const response = await Promise.all([
        api.get(GENRES_MOVIE_URL),
        api.get(GENRES_TV_URL),
      ]);

      movieGenres.value = response[0].data.genres;
      tvGenres.value = response[1].data.genres;
    } catch (err) {
      const message = err?.response?.data
        ? err.response.data.status_message
        : err.message;
      console.log("error", message);
    }
  };

  return { movieGenres, tvGenres, fetchGenres };
};
