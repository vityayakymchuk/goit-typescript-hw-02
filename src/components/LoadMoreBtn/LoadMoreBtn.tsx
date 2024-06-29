import { LoadMoreBtnProps } from '../../types';
import css from './LoadMoreBtn.module.css';
import { FC } from 'react';

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({onClick}) => {
    return (
        <div className={css.cont}>
            <button className={css.btn} type='button' onClick={onClick}>
          Load more
    </button></div>
      
  )
};

export default LoadMoreBtn;
