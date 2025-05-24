import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="container flex flex-col gap-4 p-4 md:gap-6 md:p-6 max-w-7xl mx-auto">
      <h3>Welcome to SkyReco !</h3>
    </div>
  )
}
