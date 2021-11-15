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
  Drawer,
  DrawerContent,
  CloseButton,
  Icon,
  VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'
import useWindowSize from 'hooks/useWindowSize'
import { useRouter } from 'next/dist/client/router'

const Links = ['Dashboard', 'Projects', 'Team']

const LinkItems = [
  { name: 'About Us', href: '#' },
  { name: 'Fanvestor', href: '/fanvestors' },
  { name: 'Fan Pass Offering', href: '/fanpass-offering' },

  { name: 'Partner', href: '/partner' },
]

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: '#F5D800',
    }}
    _active={{
      bg: '#F5D800',
    }}
    href={'#'}
  >
    {children}
  </Link>
)

const NavItem = ({ icon, href, children, onClose, isSelected, ...rest }) => {
  return (
    <Link
      href={href}
      style={{ textDecoration: 'none' }}
      onClick={() => {
        onClose()
      }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: '#F5D800',
          color: 'white',
        }}
        fontSize="18px"
        color={isSelected ? '#F5D800' : '#fff'}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  )
}

const SidebarContent = ({ onClose, path, ...rest }) => {
  return (
    <Box
      bg="#2C3138"
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image
          src="/images/full-logo.png"
          alt="FullLogoImg"
          height="42px"
          width="159px"
        />
        <CloseButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onClose}
          color="white"
        />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          href={link.href}
          onClose={onClose}
          isSelected={path.includes(link.href)}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

const HeaderSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()

  const { width } = useWindowSize()
  return (
    <Box pb={{ base: '60px', md: '60px', lg: 0 }}>
      <Box
        position="fixed"
        zIndex="100"
        bg={{ base: '#F5D800', md: '#F5D800', lg: '#2C3138' }}
        px={4}
        overflow="hidden"
        width="100vw"
        top={0}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Image
            src={
              width < 992
                ? '/images/BlackLogoFullText.png'
                : '/images/full-logo.png'
            }
            alt="FullLogoImg"
            height="42px"
            width="159px"
            onClick={() => {
              router.replace('/')
            }}
          />

          <Button
            fontSize="16px"
            lineHeight="19px"
            color="#000"
            fontWeight="bold"
            px="35px"
            bg="#F5D800"
            display={{ base: 'none', lg: 'block' }}
          >
            Login
          </Button>
          <IconButton
            size={'lg'}
            icon={<HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ lg: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            color="#000"
            bg="#F5D800"
          />
        </Flex>

        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent bg="rgba(0,0,0,0.5)" onClick={onClose}>
            <SidebarContent onClose={onClose} path={router.asPath} />
          </DrawerContent>
        </Drawer>
      </Box>
      <Flex
        display={{ base: 'none', md: 'none', lg: 'flex' }}
        justifyContent="center"
        bg="#F5D800"
        overflow="hidden"
        position="fixed"
        top={16}
        width="100%"
        zIndex="100"
        h={16}
      >
        <HStack spacing="50px" alignItems="center">
          <VStack cursor="pointer">
            <Text fontSize="16px" lineHeight="19px" color="#000">
              About Us
            </Text>
            <Box
              bg="#000000"
              width="5px"
              height="5px"
              opacity={router.asPath.includes('about-us') ? 1 : 0}
            />
          </VStack>
          <VStack cursor="pointer" onClick={() => router.push('/fanvestors')}>
            <Text fontSize="16px" lineHeight="19px" color="#000">
              Fanvestor
            </Text>
            <Box
              bg="#000000"
              width="5px"
              height="5px"
              opacity={router.asPath.includes('fanvestors') ? 1 : 0}
            />
          </VStack>
          <VStack
            cursor="pointer"
            onClick={() => router.push('/fanpass-offering')}
          >
            <Text fontSize="16px" lineHeight="19px" color="#000">
              Fan Pass Offering
            </Text>
            <Box
              bg="#000000"
              width="5px"
              height="5px"
              opacity={router.asPath.includes('fanpass-offering') ? 1 : 0}
            />
          </VStack>
          <VStack cursor="pointer" onClick={() => router.push('/partner')}>
            <Text fontSize="16px" lineHeight="19px" color="#000">
              Partner
            </Text>
            <Box
              bg="#000000"
              width="5px"
              height="5px"
              opacity={router.asPath.includes('partner') ? 1 : 0}
            />
          </VStack>
        </HStack>
      </Flex>
    </Box>
  )
}

export default HeaderSection
