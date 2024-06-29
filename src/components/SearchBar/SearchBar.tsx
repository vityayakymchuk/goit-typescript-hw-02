import css from './SearchBar.module.css';
import toast from 'react-hot-toast';
import { FC, FormEvent } from 'react';
import { SearchBarProps } from '../../types';

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {

    const handleSubmit = (evt: FormEvent<HTMLFormElement>):void => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
      const topicInput = form.elements.namedItem('topic') as HTMLInputElement;
      const topic = topicInput.value;
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
};

export default SearchBar;
