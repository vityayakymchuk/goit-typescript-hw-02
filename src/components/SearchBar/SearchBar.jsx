import css from './SearchBar.module.css';
import toast from 'react-hot-toast';

export default function SearchBar({ onSubmit }) {

    const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;
        if (topic.trim() == "") {
            toast.error('You are searching empty value!')
            return;
        }
    onSubmit(topic);
    form.reset();
  };
    
  return (
   <header className={css.header}>
  <form className={css.form} onSubmit={handleSubmit}>
    <input
      name="topic"
      className={css.search}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
    <button className={css.btn} type="submit">Search</button>
  </form>
</header>

  )
}
