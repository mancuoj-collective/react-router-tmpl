import { ThemeToggle } from '@/components/theme-toggle'
import { TwScreenIndicator } from '@/components/tw-screen-indicator'
import { Button } from '@/components/ui/button'

export function meta() {
  return [
    { title: 'React Router' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export default function Home() {
  return (
    <div className="relative font-sans antialiased">
      <div className="flex flex-col items-center justify-center min-h-svh">
        <div className="flex gap-2">
          <ThemeToggle />
          <Button variant="outline" size="icon">
            <a className="iconify carbon--logo-github size-4.5" href="https://github.com/mancuoj-collective/remix-tmpl" />
          </Button>
        </div>
        <TwScreenIndicator />
      </div>
    </div>
  )
}
