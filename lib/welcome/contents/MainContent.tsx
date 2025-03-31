import { useState } from 'react'
import { Button } from '../../components/ui/button'
import { Badge } from '../../components/ui/badge'
import { Card, CardContent } from '../../components/ui/card'

const MainContent = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(prev => prev + 1)
  const decrement = () => setCount(prev => prev - 1)
  const reset = () => setCount(0)

  return (
    <div className="p-4 h-full flex flex-col justify-center">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-3">Welcome to Firestuff's Electron All in one template!</h2>
          <p className="text-muted-foreground mb-4">
            Modern desktop application development made simple
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge variant="secondary" className="px-2 py-0.5 text-xs">Electron</Badge>
            <Badge variant="secondary" className="px-2 py-0.5 text-xs">React</Badge>
            <Badge variant="secondary" className="px-2 py-0.5 text-xs">Vite</Badge>
            <Badge variant="secondary" className="px-2 py-0.5 text-xs">TypeScript</Badge>
            <Badge variant="secondary" className="px-2 py-0.5 text-xs">Tailwind</Badge>
            <Badge variant="secondary" className="px-2 py-0.5 text-xs">shadcn UI</Badge>
          </div>
        </div>

        {/* Counter Demo */}
        <Card className="mb-6 shadow-sm">
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-4">Counter Demo</h3>
            <div className="text-5xl font-bold mb-6">{count}</div>
            <div className="flex justify-center gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={decrement}
                className="w-20"
              >
                -
              </Button>
              <Button 
                variant="default" 
                size="sm" 
                onClick={reset}
                className="w-20"
              >
                Reset
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={increment}
                className="w-20"
              >
                +
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-xs text-muted-foreground">
          <a 
            href="https://github.com/firestuffteam/Simple-Electron-All-in-One-Template" 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center gap-1 text-blue-600 hover:underline dark:text-blue-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            github.com/firestuffteam/Simple-Electron-All-in-One-Template
          </a>
        </div>
      </div>
    </div>
  )
}

export default MainContent
