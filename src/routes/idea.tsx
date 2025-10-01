import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/idea')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/idea"!</div>
}

