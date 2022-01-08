const fetchImageData = async () => {
  const api_key = process.env.REACT_APP_NASA_API_KEY;

  const start_date = "2021-12-20";
  const end_date = "2022-01-01";

  let imageDataArr;

  try {
    const apiCallToFetchImageData = async () => {
      await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${api_key}&start_date=${start_date}&end_date=${end_date}`
      )
        // await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`)
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

export default fetchImageData;
