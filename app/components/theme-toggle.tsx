import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setSystemTheme(mediaQuery.matches ? 'dark' : 'light')

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  function switchTheme() {
    switch (theme) {
      case 'light':
        setTheme('dark')
        break
      case 'dark':
        setTheme('light')
        break
      case 'system':
        setTheme(systemTheme === 'light' ? 'dark' : 'light')
        break
      default:
        break
    }
  };

  function toggleTheme() {
    if (!document.startViewTransition) {
      switchTheme()
    }
    document.startViewTransition(switchTheme)
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      <span className="iconify carbon--sun size-4.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <span className="iconify carbon--moon absolute size-4.5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
