import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar/SearchBar';
import { makeGallery } from './FetchData';
import { Toaster } from 'react-hot-toast';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';


function App() {
  const [searchValue, setSearchValue] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [imageInfo, setImageInfo] = useState({ alt: "", url: "" });


  useEffect(() => {
if (searchValue.trim() === "") {
  return;
}
    async function fetchImages() {
      try {
        
        setIsLoading(true);
        setIsError(false);
        const data = await makeGallery(searchValue, page);
        if(data.length === 0) {setIsError(true)}
        setImages((prevState) => [...prevState, ...data])
        console.log(data)
      } catch (error) {
         setIsError(true);
      } finally {setIsLoading(false)}
    };
    fetchImages()
  }, [searchValue, page]);
 
 const handleSearch = async (topic) => {
   setSearchValue(topic);
   setPage(1);
   setImages([]);
 };
  
const handleLoadMore = async () => {
  setPage(page + 1);
  
};
  
  const openModal = (alt, url) => {
    setIsOpen(true);
    setImageInfo({ alt, url });
  };

  const closeModal = () => {
    setIsOpen(false);
    setImageInfo({ alt: "", url: "" });
  };


  return (
    <>
      <Toaster position="top-left"
  reverseOrder={true}/>
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && <ImageGallery allImages={images} openModal={openModal} />}
      {isLoading && <Loader isLoading={isLoading} />}
      {isError && <ErrorMessage />}
      {images.length > 0 && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
     <ImageModal
        isModalOpen={isOpen}
        closeModal={closeModal}
        imageInfo={imageInfo}
      />

    </>
  )
}

export default App
