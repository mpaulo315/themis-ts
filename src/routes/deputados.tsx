import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/deputados')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/deputados"!</div>
}
