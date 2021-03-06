import axios from "axios";
import React, { useState, useEffect } from "react";
import ImgCard from "./components/ImgCard/ImgCard";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");


  useEffect(() => {
    const loadPost = async () => {
        setIsLoading(true);
        const response = await axios.get(
        `https://pixabay.com/api/?key=27977448-cb1418e46f83739e49588977f&q=${searchText}&image_type=photo&pretty=true`);
        setImages(response.data.hits);
        setIsLoading(false);
    }

    // Call the function
    loadPost();
}, [searchText]);
  return (
    <div className="bg-black">
      <div className="w-screen flex items-center justify-center h-40 bg-black fixed inset-0 z-50">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="search"
          name="search"
          id=""
          placeholder="Search For Images - Yellow Flower"
          className="w-1/4 outline-none border border-r-0 border-slate-300 h-10 p-4 bg-white rounded-lg rounded-r-none"
        />
        <i className="fa fa-search border border-l-0 border-slate-300 h-10  p-4 bg-white rounded-lg rounded-l-none"></i>
      </div>
      {!isLoading && images.length === 0 && (
        <h1 className="text-center text-white text-4xl mt-40">No Results Found!</h1>
      )}
      ;
      {isLoading ? (
        <h1 className="text-center  text-4xl ">Loading.....</h1>
      ) : (
        <main className="mt-5 mx-auto bg-black grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-2 p-10">
          {images.map((image) => (
            <ImgCard key={image.id} image={image} />
          ))}
        </main>
      )}
    </div>
  );
}

export default App;