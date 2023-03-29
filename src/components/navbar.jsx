import { Container,Button } from '@chakra-ui/react'
import { Box,Image } from '@chakra-ui/react'


function Navbar(){
  return(
    <Box w="100%" bg="#51a5eb99" h="80px" display="flex" alignItems="center">
        <Image src='../assets/logo.png'></Image>
        <Box ml='auto'>
          <Button border='none' _active={{bg:"#b158b1"}}  _hover={{borderBottomRadius:'0px',borderBottom:'2px solid black',fontSize:'17px'}} mr={2} textTransform="uppercase" variant='ghost'>Home</Button>
          <Button border='none' _active={{bg:"#b158b1"}} mr={2} _hover={{borderRadius:'0px',borderBottom:'2px solid black',fontSize:'17px'}} textTransform="uppercase" variant='ghost'>About ME</Button>
          <Button border='none' _active={{bg:"#b158b1"}} mr={2} _hover={{borderRadius:'0px',borderBottom:'2px solid black',fontSize:'17px'}} textTransform="uppercase" variant='ghost'>Projects</Button>
          <Button border='none' _active={{bg:"#b158b1"}} mr={2} _hover={{borderRadius:'0px',borderBottom:'2px solid black',fontSize:'17px'}} textTransform="uppercase" variant='ghost'>Contact me</Button>
        </Box>
      </Box>
    )
}

export default Navbar;