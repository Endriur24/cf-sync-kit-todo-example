import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import { ConnectionProvider } from 'cf-sync-kit'
import App from './app'
import { ErrorBoundary } from './error-boundary'

const rootElement = document.getElementById('root')
if (rootElement) {
  const queryClient = new QueryClient()
  const root = createRoot(rootElement)
  root.render(
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ConnectionProvider>
          <App />
        </ConnectionProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  )
}
