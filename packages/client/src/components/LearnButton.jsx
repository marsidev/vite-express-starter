import { Link, Button } from '@chakra-ui/react'
import { BiRightArrowAlt as RightArrow } from 'react-icons/bi'

const LearnButton = ({ href, content, bg, icon, ...rest }) => {
  return (
    <Button
      as={Link}
      isExternal
      href={href}
      leftIcon={icon || <RightArrow />}
      variant='solid'
      bg={bg}
      _hover={{
        textDecoration: 'none',
        filter: 'brightness(90%)'
      }}
      _active={{
        textDecoration: 'none',
        filter: 'brightness(85%)'
      }}
      transition='all 0.2s'
      {...rest}
    >
      {content}
    </Button>
  )
}

export default LearnButton
