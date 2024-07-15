import request from "./Request";
import { BASE_URL, URL_METHODS,KEY } from "../Constants/index";

const getArticles = async (period=7) => {
  try {
    const response = await request({
      url: `${BASE_URL}${period}.json?api-key=${KEY}`,
     // method: URL_METHODS.GET,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

const Newyork = { getArticles };

export default Newyork;
