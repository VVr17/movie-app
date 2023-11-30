import { api } from "@/services/axiosConfig";
import { ref } from "vue";

const useApiData = () => {
  const data = ref(null);
  const error = ref(null);

  const getData = async (url, params) => {
    try {
      const response = await api.get(url, { params });
      data.value = response.data;
    } catch (err) {
      const message = err?.response?.data
        ? err.response.data.status_message
        : err.message;
      error.value = message;
    }
  };

  return { data, error, getData };
};

export default useApiData;
