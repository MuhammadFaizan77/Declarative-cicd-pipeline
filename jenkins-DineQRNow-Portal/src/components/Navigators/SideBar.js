import React, { ReactNode } from 'react';
import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    BoxProps,
    FlexProps,
    Image,
    Stack,
    Heading,
} from '@chakra-ui/react';
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
} from 'react-icons/fi';
import { FaUsers, FaCoins } from 'react-icons/fa'
import { ImTrophy } from 'react-icons/im'
import { RiArtboardFill, RiSettings5Fill } from 'react-icons/ri'
import { BsBellFill } from 'react-icons/bs'
import {
    AiOutlineBarChart
} from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi'

import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../reducers/useReducers';

const LinkItems = [
    { name: 'Orders', icon: FaUsers, url: '/dashboard/orders' },
    { name: 'Menu', icon: RiArtboardFill, url: '/dashboard/menu' },
    { name: 'Inventory', icon: ImTrophy, url: '/dashboard/inventory' },
    { name: 'Analytics', icon: AiOutlineBarChart, url: '/dashboard/analytics' },
    { name: 'Profile', icon: BsBellFill, url: '/dashboard/profile' },
];

export default function Sidebar({ children }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
    return (
        <Box
            minH={{ base: 'fit-content', lg: '100vh' }}
            bg={useColorModeValue('gray.100', 'gray.900')}
            position={{ base: 'absolute', lg: 'initial' }}
            zIndex={'1'}
            left={'40px'}
            top={'32px'}
            w={{ base: '0px', lg: 'auto' }}
            boxShadow={"30px 0px 15px 0px #141414"}
        >
            <SidebarContent
                onClose={() => onClose}
                display={{ base: 'none', lg: 'block' }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav display={{ base: 'flex', lg: 'none' }} onOpen={onOpen} />
            <Box ml={{ base: 0, md: 60 }} p={{ base: '0', md: '4' }}>
                {children}
            </Box>
        </Box>
    );
}

const SidebarContent = ({ onClose, ...rest }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <Box
            bg={useColorModeValue('#141414')}
            borderRight="1px"
            borderRightColor={useColorModeValue('#141414', '#141414')}
            w={{ base: 'full', lg: 72 }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="40" alignItems="center" mx="8" justifyContent={{ base: "space-between", lg: "center" }}>
                {/* <Image alt={'Logo'} src={logo} draggable={false} w={{base: '60%', md: '100%'}}

                /> */}
                <Heading color={'primaryYellow.100'}>DineQrNow</Heading>
                <CloseButton color={'#fff'} display={{ base: 'flex', lg: 'none' }} onClick={onClose} />
            </Flex>
            <Stack
                px={6}
                direction={'column'}
                justifyContent={'space-between'}
                height={'70%'}
            >
                <Box>
                    {LinkItems.map((link) => (
                        <NavItem key={link.name} icon={link.icon} url={link.url}>
                            {link.name}
                        </NavItem>
                    ))}
                </Box>
                <Box>
                    <Link
                        textDecoration={'none !important'}
                        onClick={() => {
                            dispatch(logout())
                            navigate('/')
                        }}
                        textAlign={'center'}
                        color={"#D93434"}
                        px={6}
                        display={'flex'}
                        alignItems={'center'}
                        fontWeight={500}
                    >
                        <Text as={"span"}
                            fontSize={18}
                        >
                            Log Out
                        </Text>
                        <Icon
                            as={BiLogOut}
                            ml={2}
                            fontSize={28}
                        />
                    </Link>
                </Box>
            </Stack>
        </Box>
    );
};

const NavItem = ({ icon, url, children, ...rest }) => {

    const navigate = useNavigate();
    const location = useLocation();

    const [tempLocation, setTempLocation] = useState('');

    useEffect(() => {
        let currentLocation = location.pathname.split('/');
        setTempLocation(`/${currentLocation[1]}/${currentLocation[2]}s`)
    }, [location])

    return (
        <Link
            onClick={() => navigate(url)}
            style={{ textDecoration: 'none', color: '#fff' }}
            _focus={{ boxShadow: 'none' }}
            role="group"
        >
            <Flex
                bgGradient={url === location.pathname || url === tempLocation ? 'linear(to-r, #a57700, primaryYellow.100)' : 'transparent'}
                align="center"
                borderRadius={12}
                px="4"
                py="2.5"
                marginBottom={4}
                cursor="pointer"
                // _groupHover={{
                //     bgGradient: 'linear(to-r, #a57700, primaryYellow.100)'
                // }}
                {...rest}>
                {icon && (
                    <Icon
                        mr="6"
                        fontSize="22"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                        color={url === location.pathname || url === tempLocation ? '#fff' : 'primaryGreen.100'}
                    />
                )}
                <Text
                    fontSize={18}
                >
                    {children}
                </Text>
            </Flex>
        </Link>
    );
};

const MobileNav = ({ onOpen, ...rest }) => {
    return (
        <Flex
            position={'absolute'}
            left={'-40px'}
            ml={{ base: 0, md: '35px' }}
            px={{ base: 0, md: 0 }}
            height="auto"
            alignItems="flex-start"
            bg={useColorModeValue('transparent', 'transparent')}
            borderBottomWidth="0px"
            borderBottomColor={useColorModeValue('#141414', '#141414')}
            justifyContent="flex-start"
            {...rest}>
            <IconButton
                color={'primaryGreen.100'}
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                icon={<FiMenu />}
                left={0}
            />
        </Flex>
    );
};