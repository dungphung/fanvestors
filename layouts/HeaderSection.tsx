import react, { ReactNode } from 'react'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
} from '@chakra-ui/react'
import Image from 'next/image'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'
import FullLogoImg from 'public/images/full-logo.png'

const Links = ['Dashboard', 'Projects', 'Team']

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
)

const HeaderSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />

          <Image
            src={FullLogoImg}
            alt="FullLogoImg"
            height="42px"
            width="159px"
          />

          {/* <Flex alignItems={'center'}>
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<AddIcon />}
            >
              Action
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex> */}
          <Button
            fontSize="16px"
            lineHeight="19px"
            color="#000"
            fontWeight="bold"
            px="35px"
            bg="#F5D800"
          >
            Login
          </Button>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Flex justifyContent="center" bg="#F5D800">
        <HStack py="23px" spacing="50px">
          <Text fontSize="16px" lineHeight="19px" color="#000">
            Fanvestor
          </Text>
          <Text fontSize="16px" lineHeight="19px" color="#000">
            Fan Pass Offering
          </Text>
          <Text fontSize="16px" lineHeight="19px" color="#000">
            About Us
          </Text>
          <Text fontSize="16px" lineHeight="19px" color="#000">
            Partner
          </Text>
        </HStack>
      </Flex>
    </>
  )
}

export default HeaderSection
