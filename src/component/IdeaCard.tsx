import { Link } from '@tanstack/react-router';
import type { Idea } from '@/types';
import clsx from 'clsx';

const IdeaCard = ({
  idea,
  button = true,
}: {
  idea: Idea;
  button?: boolean;
}) => {
  const linkClasses = clsx({
    'text-blue-600 hover:underline mt-3': !button,
    'text-center mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hove:bg-blue-700 transition':
      button,
  });
  return (
    <>
      <li key={idea.id} className='border text-gray-800 p-4 m-2 list-none'>
        <h2 className='text-lg font-bold'>{idea.title}</h2>
        <p className='mt-2'>{idea.summary}</p>
        <Link
          to='/ideas/$ideaId'
          params={{ ideaId: idea.id.toString() }}
          className={linkClasses}
        >
          {button ? 'View Idea' : 'Read More →'}
        </Link>
      </li>
    </>
  );
};

export default IdeaCard;
