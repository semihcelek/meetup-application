import axios from "axios";
import useSWR from "swr";

const fetch = async (url) => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}${url}`);
  console.log(response.data);
  return response.data;
};

export const useFetch = (url) => {
  const { data, error } = useSWR(url, fetch);

  return {
    data: data,
    isloading: !error && !data,
    error: error,
  };
};
