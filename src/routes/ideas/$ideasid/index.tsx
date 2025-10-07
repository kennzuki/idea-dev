import { createFileRoute, Link,useNavigate } from '@tanstack/react-router'
import { queryOptions, useSuspenseQuery,useMutation } from '@tanstack/react-query';
import type { Idea } from '@/types';
import api from '@/lib/axios'
import { deleteIdea } from '@/api/ideas';


const fetchIdea = async (ideaId: string):Promise<Idea> => {
   const res = await api.get(`/ideas/${ideaId}`);
   return res.data
}

const IdeaQueryOptions = (ideaId:string)=>queryOptions({
  queryKey: ['idea', ideaId],
  queryFn:()=> fetchIdea(ideaId),
})

export const Route = createFileRoute('/ideas/$ideasId/')({
  component: IdeaDetailsId,
  loader: async ({ params, context: {queryClient} }) => {
    return queryClient.ensureQueryData(IdeaQueryOptions(params.ideasId));
  }
 
})

function IdeaDetailsId() {
  const {ideasId} = Route.useParams();
  const {data:idea }= useSuspenseQuery(IdeaQueryOptions(ideasId));
  const navigate = useNavigate();
  const { mutateAsync:deleteMutate, isPending } = useMutation({
    mutationFn: () => deleteIdea(ideasId), 
    onSuccess: () => navigate({ to: '/ideas' })
  })
  
  const handleDelete = async() => {
    const confirmDelete = window.confirm('Are you sure you want to delete this idea?');
    if (confirmDelete){ 
    await deleteMutate();}
  }
  
  return <div className='p-8'>
     <Link to='/ideas' className='text-blue-500 underline block mb-4'>
        Back To Ideas
      </Link>
      <h2 className='text-2xl font-bold'>{idea.title}</h2>
    <p className='mt-2'>{idea.description}</p>
    <div className="flex gap-4 mt-4">
      <Link to={`/ideas/${ideasId}/edit`} params={{ ideasId }}
      
      className='bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition inline-block mt-4'>
        Edit Idea
      </Link>
     <button
           disabled={isPending}
            onClick={handleDelete}
            className='text-sm bg-red-600 hover:bg-red-700 text-white mt-4 px-4 py-2 rounded transition disabled:opacity:50'
          >
           {isPending ? 'Deleting...' : 'Delete Idea'}
          </button>
    </div>
    
  </div>
}
