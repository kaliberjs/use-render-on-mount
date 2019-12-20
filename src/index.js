export function useRenderOnMount() {
  const [isMounted, setIsMounted] = React.useState(false)
  
  React.useEffect(() => { setIsMounted(true) }, [])

  return isMounted
}

