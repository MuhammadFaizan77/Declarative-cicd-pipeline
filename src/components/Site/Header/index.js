import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image,
    Container,
    Input,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
import Logo from '../../../assets/images/logo.png'
import { Link as ReactLink, useNavigate } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi'

export default function Header() {

    const navigate = useNavigate();
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box
            bg={useColorModeValue('primaryBlack.100', 'gray.800')}
        >
            <Container maxW={'8xl'}>
                <Flex
                    color={useColorModeValue('gray.600', 'white')}
                    minH={'60px'}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    borderBottom={0}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.900')}
                    alignItems={'center'}>
                    <Flex
                        flex={{ base: 1, md: 'auto' }}
                        ml={{ base: -2 }}
                        display={{ base: 'flex', md: 'none' }}>
                        <IconButton
                            onClick={onToggle}
                            icon={
                                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                            }
                            variant={'ghost'}
                            aria-label={'Toggle Navigation'}
                        />
                    </Flex>
                    <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} alignItems={'center'}>
                        <Text
                            as={ReactLink}
                            to={'/'}
                            w={'180px'}
                            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                            fontFamily={'heading'}
                            color={useColorModeValue('gray.800', 'white')}>
                            <Image
                                src={Logo}
                                alt='Logo'
                                w={'80px'}
                            />
                        </Text>

                        <Flex flex={1} display={{ base: 'none', md: 'flex' }} ml={0}>
                            <DesktopNav />
                        </Flex>
                    </Flex>

                    <Stack
                        flex={{ base: 1, md: 0 }}
                        justify={'flex-end'}
                        direction={'row'}
                        spacing={6}>
                        <Menu>
                            <MenuButton
                                borderRadius={4}
                                bg={'primaryGreen.100'}
                                border={'1px solid'}
                                borderColor={'primaryGreen.100'}
                                color={'primaryBlack.100'}
                                as={Button}
                                rightIcon={<ChevronDownIcon />}
                                transition={'.3s'}
                                _hover={{
                                    bg: 'transparent',
                                    color: 'primaryGreen.100'
                                }}
                                _active={{
                                    bg: 'transparent',
                                    color: 'primaryGreen.100'
                                }}
                            >
                                Popular Categories
                            </MenuButton>
                            <MenuList>
                                {
                                    Categories.map((v, i) => {
                                        return (
                                            <MenuItem
                                                as={ReactLink}
                                                to={v.href}
                                                key={i}
                                                transition={'.2s'}
                                                _hover={{
                                                    bg: 'primaryBlack.100',
                                                    color: 'primaryGreen.100'
                                                }}
                                            >
                                                <Text>{v.label}</Text>
                                            </MenuItem>
                                        )
                                    })
                                }
                            </MenuList>
                        </Menu>
                    </Stack>
                </Flex>

                <Collapse in={isOpen} animateOpacity>
                    <MobileNav />
                </Collapse>
            </Container>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'} spacing={4} w={'90%'} position={'relative'}>
            <BiSearchAlt size={20} position={'absolute'} style={{ position: 'absolute', top: '30%', right: '10px', color: '#0bd46e' }} />
            <Input
                fontSize={14}
                type={'text'}
                placeholder={'Search Stores and Offers in Dealstuner'}
                w={'100%'}
                borderRadius={0}
                borderBottomWidth={'2px'}
                py={5}
                px={4}
                borderColor={'transparent'}
                borderBottomColor={'#fff'}
                color={'#fff'}
                transition={'.3s'}
                _hover={{
                    boxShadow: 'none',
                    borderColor: 'transparent',
                    borderBottomWidth: '2px',
                    borderBottomColor: '#fff',
                    borderRadius: '0'
                }}
                _focus={{
                    boxShadow: 'none',
                    borderColor: 'transparent',
                    borderBottomWidth: '2px',
                    borderBottomColor: 'primaryGreen.100',
                    borderRadius: '0'
                }} />
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
        <Link
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'pink.400' }}
                        fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    );
};

const MobileNav = () => {
    return (
        <Stack direction={'row'} spacing={4} w={'90%'} position={'relative'}>
            <BiSearchAlt size={20} position={'absolute'} style={{ position: 'absolute', top: '30%', right: '10px', color: 'primaryGreen.100' }} />
            <Input
                fontSize={14}
                type={'text'}
                placeholder={'Search Stores and Offers in Dealstuner'}
                w={'100%'}
                borderRadius={4}
                borderWidth={'0px'}
                py={5}
                px={4}
                borderColor={'#fff'}
                color={'#fff'}
                transition={'.3s'}
                _focus={{
                    boxShadow: 'none',
                    borderColor: 'transparent',
                    borderBottomWidth: '2px',
                    borderBottomColor: 'primaryGreen.100',
                    borderRadius: '0'
                }} />
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

const NAV_ITEMS = [
    {
        label: 'Inspiration',
        children: [
            {
                label: 'Explore Design Work',
                subLabel: 'Trending Design to inspire you',
                href: '#',
            },
            {
                label: 'New & Noteworthy',
                subLabel: 'Up-and-coming Designers',
                href: '#',
            },
        ],
    },
    {
        label: 'Find Work',
        children: [
            {
                label: 'Job Board',
                subLabel: 'Find your dream design job',
                href: '#',
            },
            {
                label: 'Freelance Projects',
                subLabel: 'An exclusive list for contract work',
                href: '#',
            },
        ],
    },
    {
        label: 'Learn Design',
        href: '#',
    },
    {
        label: 'Hire Designers',
        href: '#',
    },
];

const Categories = [
    {
        label: 'Food & Drink',
        href: '/food-and-drink'
    },
    {
        label: 'Gifts & Flowers',
        href: '/gifts-and-flowers'
    },
    {
        label: 'Student Discount',
        href: '/student-discount'
    },
    {
        label: 'Technology',
        href: '/technology'
    },
    {
        label: 'Photography & Prints',
        href: '/photography-and-prints'
    },
    {
        label: 'Printers',
        href: '/printers'
    },
    {
        label: 'Software',
        href: '/software'
    },
    {
        label: 'Sound & Vision',
        href: '/sound-and-vision'
    },
    {
        label: 'All Categories',
        href: '/categories'
    },
]