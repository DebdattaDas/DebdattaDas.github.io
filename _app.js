import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js').then(
        registration => console.log('ServiceWorker registered with scope:', registration.scope),
        err => console.log('ServiceWorker registration failed:', err)
      )
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
