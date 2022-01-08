import { start_date, end_date } from "../constants";

const fetchImageDataArr = async () => {
  const api_key = process.env.REACT_APP_NASA_API_KEY;

  let imageDataArr;

  try {
    const apiCallToFetchImageData = async () => {
      await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${api_key}&start_date=${start_date}&end_date=${end_date}`
      )
        .then((response) => response.json())
        .then((json) => {
          imageDataArr = json;
        });
    };
    await apiCallToFetchImageData();
  } catch (error) {
    console.log(error);
  }
  return imageDataArr;
};

export { fetchImageDataArr };
