import React from 'react'

import { BreakpointContext } from './BreakpointProvider'

function getRelativeBreakpoint(px): number {
  return (parseInt(px) / 16) * parseFloat(window.getComputedStyle(document.documentElement).fontSize)
}

type Props = {
  children: React.ReactNode
  up?: boolean
  down?: boolean
  only?: boolean
  [x: string]: any
}

export function Breakpoint({
  children,
  up = false,
  down = false,
  only = false,
  ...props
}: Props): React.ReactElement | null {
  const { currentWidth, breakpoints } = React.useContext(BreakpointContext)

  const currentBreakpoint = Object.keys(props)[0]

  if (currentBreakpoint && up) {
    if (currentWidth >= getRelativeBreakpoint(breakpoints[currentBreakpoint])) {
      return <>{children}</>
    }
  }
  if (currentBreakpoint && down) {
    if (currentWidth < getRelativeBreakpoint(breakpoints[currentBreakpoint])) {
      return <>{children}</>
    }
  }

  if (currentBreakpoint && only) {
    const breakpointKeys = Object.keys(breakpoints)

    const previous = breakpointKeys.indexOf(currentBreakpoint) - 1
    const next = breakpointKeys.indexOf(currentBreakpoint) + 1

    const min = previous < -1 ? 0 : breakpoints[currentBreakpoint]
    const max = next >= breakpointKeys.length ? 99999 : breakpoints[breakpointKeys[next]]

    if (currentWidth >= min && currentWidth < max) {
      return <>{children}</>
    }
  }

  return null
}
