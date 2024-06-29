import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import {FC} from 'react';
import { ImageGalleryProps } from '../../types';

const ImageGallery: FC<ImageGalleryProps> = ({allImages, openModal}) => {
  return (
      <ul className={css.gallery}>
          {allImages.map(image => (
            <li key={image.id}>
                   <ImageCard
            urlSmall={image.urls.small}
            urlReg={image.urls.regular}
            alt={image.description || "Image description not available"}
            openModal={openModal}
          />
        </li>
    ))}
</ul>   
  )
};

export default ImageGallery;
