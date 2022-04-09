import '@styles/index.css'
import { render } from 'react-dom'
import App from '@components/App'
import theme from '@lib/theme'
import { ChakraProvider } from '@chakra-ui/react'

const Content = () => {
  return (
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  )
}

const root = document.getElementById('root')
render(<Content />, root)
