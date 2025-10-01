import { createFileRoute } from '@tanstack/react-router'

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
})

function IdeasPage() {
  return <div>Hello "/idea/"!</div>
}
