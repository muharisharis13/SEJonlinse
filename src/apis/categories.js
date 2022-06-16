import axios from "utils/axios";
import queryString from "query-string";

class Categories {
  getCategories = () => {
    return axios
      .get("/fee-assessment-categories")
      .then((res) => res?.data)
      .catch((err) => err?.response);
  };

  getBooks = (queryData) => {
    const query = queryString.stringify(queryData);
    return axios
      .get(`/fee-assessment-books?${query}`)
      .then((res) => res?.data)
      .catch((err) => err?.response);
  };
}

export default new Categories();
