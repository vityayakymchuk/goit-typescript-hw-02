import css from './LoadMoreBtn.module.css'

export default function LoadMoreBtn({onClick}) {
    return (
        <div className={css.cont}>
            <button className={css.btn} type='button' onClick={onClick}>
          Load more
    </button></div>
      
  )
}
