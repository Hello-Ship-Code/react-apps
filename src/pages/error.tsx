import { useParams } from 'react-router-dom';

import { Header } from '../components/header/header';
import { HeadingTag } from '../components/html-element-reference/text-content/heading-tag';

export const ErrorPage = () => {
  const { param } = useParams<{ param: string }>(); // Corrected type definition

  return (
    <>
      <Header />
      < HeadingTag text={`caught you looking for something: ${param || 'unknown'}`} />
    </>
  );
}; 