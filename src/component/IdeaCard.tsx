import { Link } from '@tanstack/react-router';
import type { Idea } from '@/types';

const IdeaCard = ({ idea }: { idea: Idea }) => {
    return ( 
        <>
          <li key={idea.id} className='border text-gray-800 p-4 m-2'>
            <h2 className='text-lg font-bold'>{idea.title}</h2>
            <p className='mt-2'>{idea.summary}</p>
            <Link to='/ideas/$ideaId' params={{ ideaId: idea.id.toString() }} className='text-blue-500'>View</Link>
          </li>
        </>
     );
}
 
export default IdeaCard;