import { useState } from 'react'
import 'isomorphic-fetch'
import { Button, Stack, Heading } from '@chakra-ui/react'
import ReactLogo from '@components/ReactLogo'
import LearnButton from '@components/LearnButton'
import AppContainer from '@components/AppContainer'
import { FaGithub } from 'react-icons/fa'
import { SiChakraui, SiVite, SiReact, SiExpress } from 'react-icons/si'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState('')

  const fetchData = async () => {
    const data = await fetch('/api/hello').then(r => r.json())
    setData(data)
  }

  return (
    <AppContainer>
      <Heading
        fontSize='4xl'
        fontWeight='extrabold'
        bgClip='text'
        textAlign='center'
        bgGradient='linear(to-l, #7928CA, #FF0080)'
      >
        Express + React + Vite + Chakra UI starter!
      </Heading>

      <Stack py={4} direction='row' spacing={4} align='center'>
        <Button
          zIndex={4}
          ml={2}
          colorScheme='pink'
          onClick={() => setCount(count => count + 1)}
        >
          Counter is: {count}
        </Button>

        <Button ml={2} colorScheme='pink' onClick={fetchData}>
          {data ? JSON.stringify(data) : 'Fetch API data'}
        </Button>
      </Stack>

      <ReactLogo />

      <Stack mt={16} direction={['column', 'row']} spacing={4} align='center'>
        <LearnButton
          bg='#000'
          content='Learn Express'
          href='https://expressjs.com/en/starter/hello-world.html'
          icon={<SiExpress />}
        />

        <LearnButton
          bg='cyan.400'
          content='Learn React'
          href='https://reactjs.org'
          icon={<SiReact />}
        />

        <LearnButton
          bg='#646CFF'
          content='Learn Vite'
          href='https://vitejs.dev/guide/features.html'
          icon={<SiVite />}
        />

        <LearnButton
          bg='teal.500'
          content='Learn Chakra UI'
          href='https://chakra-ui.com'
          icon={<SiChakraui />}
        />
      </Stack>

      <LearnButton
        bg='#000'
        content='GitHub'
        href='https://github.com/marsidev/vite-express-starter'
        icon={<FaGithub />}
        mt={4}
      />
    </AppContainer>
  )
}

export default App
