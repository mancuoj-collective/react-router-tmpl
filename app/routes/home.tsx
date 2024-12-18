import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Remix' }]
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <h1 className="text-2xl font-dm font-semibold">Vite is All You Need</h1>
    </div>
  )
}
