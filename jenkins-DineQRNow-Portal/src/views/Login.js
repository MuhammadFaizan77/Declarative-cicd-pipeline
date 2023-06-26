import { Box, Button, Container, FormControl, FormHelperText, FormLabel, Heading, Icon, Input, Stack, Switch, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { loadUser } from '../reducers/useReducers';

export default function Login() {

    const toast = useToast();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.value);
    const [isLoading, setIsLoading] = useState(false);
    const [isPassVisible, setIsPassVisible] = useState(false);
    const [userCreds, setUserCreds] = useState({
        userName: '',
        password: ''
    });

    const login = async () => {
        if (userCreds.userName === '' || userCreds.password === '') {
            toast({
                description: 'All fields are required!',
                status: 'error',
                position: 'bottom-left',
                isClosable: true,
                duration: 2000
            })
        } else {
            console.log(userCreds);
            setIsLoading(true);
            setTimeout(() => {
                localStorage.setItem('user', JSON.stringify(userCreds))
            }, 2000);
            toast({
                description: 'Login Success!',
                status: 'success',
                position: 'bottom-left',
                isClosable: true,
                duration: 2000
            })
            dispatch(loadUser(userCreds))
            setIsLoading(false);
        }
    }

    useEffect(() => {
        console.log(user);
        if (user === undefined || user === null) {
            navigate('/');
        }else{
            navigate('/dashboard/orders');
        }
    }, [user])

    return (
        <Stack bgColor={'primaryBlack.100'}>
            <Container maxW={'8xl'} px={0}>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} spacing={0} h={'100vh'} >
                    <Stack border={'2px solid'} borderColor={'#adadad'} p={4} px={8} borderRadius={8} textAlign={'center'} minW={'600px'} maxW={'92%'}>
                        <Heading color={'primaryYellow.100'} fontSize={48} marginTop={'-50px'} backgroundColor={'primaryBlack.100'} w={'fit-content'} marginX={'auto'} px={2}>
                            DineQrNow
                        </Heading>
                        <Text color={'#fff'} fontSize={17} fontFamily={'Poppins'} pb={8}>Take control of your restaurant like never before</Text>
                        <FormControl color={'#fff'} fontFamily={'Poppins'}>
                            <FormLabel fontSize={14}>Email address / Username *</FormLabel>
                            <Input onChange={(e) => setUserCreds({ ...userCreds, userName: e.target.value })} value={userCreds.userName} type='email' marginBottom={'4 !important'} py={6} fontSize={14} _focusVisible={{ borderColor: '#fff' }} color={'primaryYellow.100'} />
                            <FormLabel fontSize={14}>Password *</FormLabel>
                            <Box position={'relative'}>
                                <Input onChange={(e) => setUserCreds({ ...userCreds, password: e.target.value })} value={userCreds.password} type={isPassVisible ? 'text' : 'password'} marginBottom={'4 !important'} py={6} fontSize={14} _focusVisible={{ borderColor: '#fff' }} color={'primaryYellow.100'} />
                                <Button onClick={() => setIsPassVisible(!isPassVisible)} position={'absolute'} p={0} bgColor={'transparent'} _hover={{ bgColor: 'transparent' }} _active={{ bgColor: 'transparent' }} top={1.5} right={2}>
                                    <Icon as={isPassVisible ? AiFillEye : AiFillEyeInvisible} color={'primaryYellow.100'} fontSize={18} />
                                </Button>
                            </Box>
                            <Stack direction={'row'} alignItems={'center'} gap={2} pb={6}>
                                <FormHelperText pb={1.5}>Remember me.</FormHelperText>
                                <Switch colorScheme='yellow' size='md' />
                            </Stack>
                            <Button onClick={() => login()} isLoading={isLoading} w={'full'} py={5} border={'1px solid'} borderColor={'primaryYellow.100'} bgColor={'primaryYellow.100'} color={'primaryBlack.100'} _active={{ bgColor: 'transparent' }} _hover={{ bgColor: 'transparent', color: 'primaryYellow.100' }}>Login</Button>
                        </FormControl>
                    </Stack>
                </Stack>
            </Container>
        </Stack>
    )
}
