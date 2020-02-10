import React from 'react'

export const BreakpointContext = React.createContext<any>({})

type Props = {
  breakpoints?: { [x: string]: number }
  children: React.ReactNode
}

export function BreakpointProvider({ breakpoints = {}, children }: Props): React.ReactElement {
  const [currentWidth, setCurrentWidth] = React.useState(window.innerWidth)

  React.useLayoutEffect(() => {
    let resizeId
    function handleResize(): void {
      clearTimeout(resizeId)
      resizeId = setTimeout(() => setCurrentWidth(window.innerWidth), 100)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <BreakpointContext.Provider value={{ breakpoints, currentWidth }}>
      {children}
    </BreakpointContext.Provider>
  )
}
