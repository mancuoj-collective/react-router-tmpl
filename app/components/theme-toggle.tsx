import { useTheme } from 'next-themes'
import { Button } from './ui/button'

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      <span className="iconify carbon--sun size-4.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <span className="iconify carbon--moon absolute size-4.5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
