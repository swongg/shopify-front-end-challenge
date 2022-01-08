const fetchImageData = async () => {
    const api_key = process.env.REACT_APP_NASA_API_KEY;
  
    let imageData;
  
    try {
      const apiCallToFetchImageData = async () => {
        await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`)
          .then((response) => response.json())
          .then((json) => {
            imageData = json;
          });
      };
      await apiCallToFetchImageData();
    } catch (error) {
      console.log(error);
    }
  
    return imageData;
  };
  
  export default fetchImageData;
  