import { useParams } from 'react-router-dom';

import { Header } from '../components/header/header';

export const ErrorPage = () => {
  const { param } = useParams<{ param: string }>(); // Corrected type definition

  return (
    <>
      <Header />
      <h1>I caught you looking for something: {param || 'unknown'}</h1>
    </>
  );
}; 