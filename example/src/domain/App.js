import { useRenderOnMount } from '@kaliber/use-render-on-mount'

export default function App() {
  const isMounted = useRenderOnMount()

  return isMounted
    ? <div style={{ fontSize: '5em' }}>😎</div>
    : null
}
