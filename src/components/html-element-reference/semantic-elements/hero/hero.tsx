import { Link } from 'react-router-dom';

import { HeadingTag } from '../../text-content/heading-tag';

export const Hero = () => {
  return (
    <div className="flex flex-col items-center h-screen justify-center bg-gradient-to-br from-primary-500 to-secondary-500 text-white p-5">
      <HeadingTag className="text-2xl md:text-4xl font-bold mb-6">Welcome to React-App Dashboard</HeadingTag>

      <div className="flex gap-4">
        <Link to="/watch" className="border border-white p-3 rounded-lg hover:bg-white hover:text-secondary-500">
          🕒 Watch
        </Link>
        <Link to="/weather" className="border border-white p-3 rounded-lg hover:bg-white hover:text-secondary-500">
          ☁️ Weather
        </Link>
        <Link to="/todo" className="border border-white p-3 rounded-lg hover:bg-white hover:text-secondary-500">
          📝 To-Do
        </Link>
      </div>
    </div>
  );
};

export default Hero;