import isEmpty from "lodash/isEmpty";
import { ref } from "vue";
import { useRoute } from "vue-router";

import {
  CATEGORIES,
  FIRST_PAGE,
  MOVIE_DISCOVER_URL,
  TRENDING_MOVIE_URL,
  TRENDING_TV_URL,
  TV_DISCOVER_URL,
  SEARCH_TV_BY_TITLE,
  SEARCH_MOVIE_BY_TITLE,
} from "@/constants";

/**
 * Custom composition function for managing URL parameters based on the current route.
 *
 * @returns {Object} - An object containing reactive references and functions for URL parameters.
 */
export const useUrlSearchParams = () => {
  const route = useRoute();
  const searchParams = ref({});
  const url = ref(null);

  /**
   * Determines the appropriate API URL based on the category and search query.
   *
   * @param {string} category - The category of the movie ("movies" or "tv").
   */
  const getUrl = (category) => {
    const { search } = route.query;
    url.value =
      isEmpty(route.query) && category === CATEGORIES.tv
        ? TRENDING_TV_URL
        : isEmpty(route.query) && category === CATEGORIES.movies
        ? TRENDING_MOVIE_URL
        : category === CATEGORIES.tv && search
        ? SEARCH_TV_BY_TITLE
        : category === CATEGORIES.movies && search
        ? SEARCH_MOVIE_BY_TITLE
        : category === CATEGORIES.tv
        ? TV_DISCOVER_URL
        : MOVIE_DISCOVER_URL;
  };

  //TODO: There is no sort types in SEARCH - should be Default
  /**
   * Constructs search parameters based on the current route's query parameters.
   *
   * @param {string} category - The category of the movie ("movies" or "tv").
   */
  const getSearchParams = (category) => {
    const { sort, genres, minYear, maxYear, page, search } = route.query;

    searchParams.value = {
      page: page ? page : FIRST_PAGE,
      sort_by: sort ? sort : "popularity.desc",
    };

    if (search) {
      searchParams.value.query = search;
    }

    if (genres) {
      searchParams.value.with_genres = Array.isArray(genres)
        ? genres.join("|")
        : genres;
    }
    if (minYear) {
      const key =
        category === CATEGORIES.movies
          ? "primary_release_date.gte"
          : "first_air_date.gte";
      searchParams.value[key] = `${+minYear}-01-01`;
    }
    if (maxYear) {
      const key =
        category === CATEGORIES.movies
          ? "primary_release_date.lte"
          : "first_air_date.lte";
      searchParams.value[key] = `${+maxYear}-12-31`;
    }
  };

  return { url, searchParams, getUrl, getSearchParams };
};
