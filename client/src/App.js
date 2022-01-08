import React, { useState, useEffect } from "react";
import fetchImageData from "./utils/server";

const App = () => {
  const [imageData, setImageData] = useState({});

  useEffect(() => {
    const imageData = async () => {
      const data = await fetchImageData();
      console.log(data);
      setImageData(data);
    };
    imageData();
  }, []);

  return (
    <div className="App">
      <h1>hello</h1>
      <img src={imageData.url} />
    </div>
  );
};

export default App;
