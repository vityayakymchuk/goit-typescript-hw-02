import { useState, useEffect, FC } from 'react'
import SearchBar from './components/SearchBar/SearchBar';
import { makeGallery } from './FetchData';
import { Toaster } from 'react-hot-toast';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { Image, ImageInfo } from './types';


const App: FC =() => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [imageInfo, setImageInfo] = useState<ImageInfo>({ alt: "", url: "" });


  useEffect(() => {
if (searchValue.trim() === "") {
  return;
}
    const fetchImages = async ():Promise<void> => {
      try {
        
        setIsLoading(true);
        setIsError(false);
        const data = await makeGallery(searchValue, page);
        if(data.length === 0) {setIsError(true)}
        setImages((prevState) => [...prevState, ...data])
      } catch (error) {
         setIsError(true);
      } finally {setIsLoading(false)}
    };
    fetchImages()
  }, [searchValue, page]);
 
 const handleSearch = async (topic: string):Promise<void> => {
   setSearchValue(topic);
   setPage(1);
   setImages([]);
 };
  
const handleLoadMore = async ():Promise<void> => {
  setPage(page + 1);
  
};
  
  const openModal = (alt: string, url: string):void => {
    setIsOpen(true);
    setImageInfo({ alt, url });
  };

  const closeModal = ():void => {
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
