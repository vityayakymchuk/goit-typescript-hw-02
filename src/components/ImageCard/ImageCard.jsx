import css from './ImageCard.module.css'

export default function ImageCard({ urlSmall, alt, urlReg, openModal }) {
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
}
