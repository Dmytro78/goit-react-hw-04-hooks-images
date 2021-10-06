const API_KEY = "22640330-7a3d8d7b0f506b04b575708a2";
const BASE_URL = "https://pixabay.com/api/?";

const fetchImages = (searchQuery, page) => {
  const fetchUrl = `${BASE_URL}q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  return fetch(fetchUrl).then((res) => res.json());
};

export default fetchImages;
