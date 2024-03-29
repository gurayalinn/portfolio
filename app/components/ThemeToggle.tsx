'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

  return (
    <button
      aria-label="Temayı değiştir"
      type="button"
      className="flex items-center justify-center rounded-full border-2 border-grey-300 bg-transparent p-2 ring-grey-300 transition-all hover:ring-2 hover:ring-offset-2 dark:border-grey-700 dark:bg-transparent dark:ring-grey-200 dark:hover:ring-2 dark:hover:ring-offset-2"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="h-5 w-5 text-grey-800 dark:text-grey-200"
          >
            {resolvedTheme === 'dark' ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            )}
          </svg>
          <span className="hidden">
            {resolvedTheme === 'dark' ? 'light' : 'dark'}
          </span>
        </>
      )}
    </button>
  )
}

export { ThemeToggle }
