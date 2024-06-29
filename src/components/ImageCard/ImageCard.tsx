import { ImageCardProps } from '../../types';
import css from './ImageCard.module.css';
import {FC} from 'react';

const ImageCard:FC<ImageCardProps> = ({ urlSmall, alt, urlReg, openModal }) => {
  return (
    <div>
      <img
        className={css.img}
        src={urlSmall}
        alt={alt}
        onClick={() => openModal(alt, urlReg)}
      />
    </div>
  )
};

export default ImageCard;