import { FC } from 'react';
import css from './ErrorMessage.module.css';

const ErrorMessage: FC = () => {
  return (
    <p className={css.error}>
      Oops... Something wrong.. Try again.
    </p>
  );
};

export default ErrorMessage;