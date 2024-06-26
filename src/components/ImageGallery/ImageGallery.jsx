import css from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard'

export default function ImageGallery({allImages, openModal}) {
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
}
