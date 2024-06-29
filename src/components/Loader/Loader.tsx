import { Watch } from 'react-loader-spinner'
import { FC } from 'react';
import { LoaderProps } from '../../types';

const Loader: FC<LoaderProps> = ({isLoading}) => {
  return (
    <Watch
  visible={isLoading}
  height="50"
  width="50"
  radius="48"
  color="#4fa94d"
  ariaLabel="watch-loading"
          wrapperStyle={{
              marginTop: '20px',
             display: 'flex',
      justifyContent: 'center',
      alignItems: 'center', 
  }}
  />
  )
};

export default Loader;


