import { UnlockIcon } from "@chakra-ui/icons";
import { Avatar, AvatarBadge, Box, Button, Flex, HStack, Heading, Spacer, Text, useToast } from "@chakra-ui/react";

export default function Navbar() {
  const toast = useToast()

  const showToast = () => {
    toast({
      title: '로그아웃',
      description: '로그아웃 되었습니다.',
      duration: 1000,
      isClosable: true,
      status: 'success',
      position: 'top',
      icon: <UnlockIcon />
    })
  }

  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center" gap="10px">
        <Heading as="h1">Hoon Tasks</Heading>
        <Spacer />

        <HStack spacing="20px">
        <Avatar name="Mario" bg="purple" src="/img/mario.png">
          <AvatarBadge width="1.3em" bg="teal.500" >
            <Text fontSize="xs" color="white">3</Text>
          </AvatarBadge>
        </Avatar>
        <Text>hoon@gmail.com</Text>
        <Button colorScheme="purple" onClick={showToast}>Logout</Button>
        </HStack>
    </Flex>


    // <Flex bg="gray.200" justify="space-between" wrap="wrap" gap="2">
    //     <Box w="150px" h="50px" bg="red">1</Box>
    //     <Box w="150px" h="50px" bg="blue">2</Box>
    //     <Box w="150px" h="50px" flexGrow="1" bg="green">3</Box>
    //     <Box w="150px" h="50px" flexGrow="2" bg="yellow">4</Box>
    // </Flex>
  )
}
