import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ideas/new/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/idea/new/"!</div>
}
