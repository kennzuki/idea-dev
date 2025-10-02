import { createFileRoute, Link } from '@tanstack/react-router';
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';
import type { Idea } from '@/types';
import api from '@/lib/axios';

const fetchIdea = async (ideas: string): Promise<Idea> => {
  const res = await api.get(`/ideas`);
  return res.data;
};

const IdeaQueryOptions = () =>
  queryOptions({
    queryKey: ['ideas'],
    queryFn: () => fetchIdea(),
  });

export const Route = createFileRoute('/ideas/')({
  head: () => ({
    title: 'Idea Drop-Your Ideas, Your Way',
    meta: [
      {
        name: 'description',
        content: 'Idea Drop',
      },
    ],
  }),
  component: IdeasPage,
  loader: async ({ context: { queryClient } }) => {
    return queryClient.ensureQueryData(IdeaQueryOptions());
  },
});

function IdeasPage() {
  const { data: ideas } = useSuspenseQuery(IdeaQueryOptions());

  return (
    <div className='p-8'>
      <h1 className='text-2xl capitalize'>ideas</h1>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {ideas.map((idea) => (
          <li key={idea.id} className='border text-gray-800 p-4 m-2'>
            <h2 className='text-lg font-bold'>{idea.title}</h2>
            <p className='mt-2'>{idea.summary}</p>
            <Link to='/ideas/$ideaId' params={{ ideaId: idea.id.toString() }} className='text-blue-500'>View</Link>
            
          </li>
        ))}
      </ul>
    </div>
  );
}
