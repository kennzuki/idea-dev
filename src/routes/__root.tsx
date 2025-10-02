import { HeadContent,Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { QueryClient } from '@tanstack/react-query'
import Header from '@/component/Header'
type RouterContext = {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
  head: () => ({
    title: 'Idea Drop-Your Ideas, Your Way',
    meta: [
      {
        name: 'description',
        content: 'Idea Drop',
      },
    ],
 }),
  component: () => (
    <>
      <HeadContent />
      <Header />
      <Outlet />
      <TanStackDevtools
        config={{
          position: 'bottom-left',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  ),
})
