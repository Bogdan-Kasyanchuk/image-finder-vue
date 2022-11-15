import axios from "axios";

const parameters = {
  KEY: "23972474-59b971b2a70ac3d99136f23c2",
  BASE_URL: "https://pixabay.com/api",
};

const fetchApi = async (searchQuery, page) => {
  const response = await axios.get(
    `${parameters.BASE_URL}/?q=${searchQuery}&page=${page}&key=${parameters.KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  if (response.status === 200) return response.data.hits;
  throw new Error(response.status);
};

export default fetchApi;
