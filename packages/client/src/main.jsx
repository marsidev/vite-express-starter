import '@styles/index.css'
import { createRoot } from 'react-dom/client'
import App from '@/App'
import theme from '@lib/theme'
import { ChakraProvider } from '@chakra-ui/react'

const Content = () => {
  return (
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Content />)
