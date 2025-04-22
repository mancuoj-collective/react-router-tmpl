import { Button } from '@/components/ui/button'

export function meta() {
  return [
    { title: 'React Router' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Button>React Router</Button>
    </div>
  )
}
