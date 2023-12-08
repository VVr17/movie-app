import { ref } from "vue";
import { api } from "@/services/axiosConfig";

/**
 * Composable for handling API data retrieval.
 *
 * @returns {Object} - An object containing reactive references to data, error, and a function to fetch data.
 */
export const useApiData = () => {
  const data = ref(null);
  const isLoading = ref(false);
  const error = ref(null);

  /**
   * Fetches data from the specified URL using Axios.
   *
   * @param {string} url - The URL endpoint for the API request.
   * @param {Object} params - Optional parameters to be included in the API request.
   */
  const getData = async (url, params) => {
    try {
      isLoading.value = true;
      const response = await api.get(url, { params });
      data.value = response.data;
      isLoading.value = false;
    } catch (err) {
      const message = err?.response?.data
        ? err.response.data.status_message
        : err.message;
      error.value = message;
      isLoading.value = false;
    }
  };

  return { data, error, isLoading, getData };
};
