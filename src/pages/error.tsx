import { useParams } from 'react-router-dom';

export const ErrorPage = () => {
  const { param } = useParams<{ param: string }>(); // Corrected type definition

  return (
    <>
      <h1>I caught you looking for something: {param || 'unknown'}</h1>
      <a href="/">Home</a>
    </>
  );
}; 