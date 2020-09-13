import axios from "../../config/axios";

export const getCountries = async () => {
  try {
    const countryRes = await axios.get("country");
    return countryRes.data.data;
  } catch (err) {
    console.log(err.response.data.message);
  }
};
