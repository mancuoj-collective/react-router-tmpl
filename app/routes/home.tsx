import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'React Router v7' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <h1 className="btn">Vite is All You Need</h1>
    </div>
  )
}
