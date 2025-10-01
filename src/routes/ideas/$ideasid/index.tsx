import { createFileRoute } from '@tanstack/react-router'

const fetchIdea = async (ideaId: string) => {
   const res = await fetch(`/api/ideas/${ideaId}`);
  
  if(!res.ok){
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export const Route = createFileRoute('/ideas/$ideasid/')({
  component: IdeaDetailsId,
  loader: async ({ params }) => {
    return fetchIdea(params.ideasid);
  }
 
})

function IdeaDetailsId() {
  const idea = Route.useLoaderData();
  return <div>Hello "/ideas/$ideasid/"!</div>
}
