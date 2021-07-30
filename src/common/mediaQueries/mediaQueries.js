const breakpoints = {
    xs: 0,
    sm: 320,
    md: 720,
    lg: 1024,
    xl: 1900,
}


export const mediaQueries = {

    // View Isolated
    xs: `(max-width: ${breakpoints.sm - 1}px)`,
    sm: `(min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.md - 1}px)`,
    md: `(min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg - 1}px)`,
    lg: `(min-width: ${breakpoints.lg}px) and (max-width: ${breakpoints.xl - 1}px)`,
    xl: `(min-width: ${breakpoints.xl}px)`,

    // Cascading Up
    smUp: `(min-width: ${breakpoints.sm}px)`,
    mdUp: `(min-width: ${breakpoints.md}px)`,
    lgUp: `(min-width: ${breakpoints.lg}px)`,
    xlUp: `(min-width: ${breakpoints.xl}px)`,

    // Device Orientation
    portrait: `(orientation: portrait)`,
    landscape: `(orientation: landscape)`,
}
