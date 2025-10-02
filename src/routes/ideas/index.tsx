import { createFileRoute, Link } from '@tanstack/react-router';
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';
import type { Idea } from '@/types';
import api from '@/lib/axios';
import IdeaCard from '@/component/IdeaCard';

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
      <h1 className='text-2xl capitalize font-bold'>ideas</h1>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {ideas.map((idea) => (
          <IdeaCard key={idea.id} idea={idea} />
        ))}
      </ul>
    </div>
  );
}
