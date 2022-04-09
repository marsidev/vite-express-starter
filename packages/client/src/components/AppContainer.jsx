import { Flex } from '@chakra-ui/react'

function App({ children }) {
  return (
    <Flex
      bg='gray.800'
      flexDir='column'
      color='white'
      minH='100vh'
      display='flex'
      alignItems='center'
      justify='center'
    >
      {children}
    </Flex>
  )
}

export default App
