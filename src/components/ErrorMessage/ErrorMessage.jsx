import css from './ErrorMessage.module.css'

export default function ErrorMessage() {
  return (
      <p className={css.error}>Oops... Something wrong.. Try again.
    </p>
  )
}
