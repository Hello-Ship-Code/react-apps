import { useParams } from 'react-router-dom';

import { HeadingTag } from '../components/html-element-reference/text-content/heading-tag';

export const ErrorPage = () => {
  const { param } = useParams<{ param: string }>(); // Corrected type definition

  return (
    <>

      < HeadingTag className='app-bar-fix'>caught you looking for something: ${param || 'unknown'} </HeadingTag>
    </>
  );
}; 