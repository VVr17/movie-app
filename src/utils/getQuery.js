/**
 * Converts form data into a query object.
 *
 * @param {Object} formData - The form data object to be converted.
 * @returns {Object} - The resulting query object.
 */
export const getQuery = (formData) => {
  const query = {};

  for (const key in formData) {
    const value = formData[key];
    if (value) query[key] = Array.isArray(value) ? value : value.toString();
  }

  return query;
};
