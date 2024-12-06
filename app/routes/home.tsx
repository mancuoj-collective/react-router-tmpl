import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'React Router' }]
}

export default function Home() {
  return <div>Home</div>
}
