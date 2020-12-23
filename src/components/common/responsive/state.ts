import { Grid } from 'antd'

export const useResponsiveState = () => {
  const { useBreakpoint } = Grid
  const screens = useBreakpoint()
  const breakpoints = Object.entries(screens)
    .filter((screen) => !!screen[1])
    .map((screen) => screen[0])
  const isMobile = !!Object.keys(screens).length && !breakpoints.includes('md')
  return {
    isMobile,
  }
}
