import React from 'react'
import BaseDashboard from '../components/BaseDashboard/BaseDashboard'
import { Box, Stack } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import defAdmin from '../assets/images/defAdmin.png'
import { Input } from '@chakra-ui/input'
import { useRef } from 'react'
import { Button } from '@chakra-ui/button'
import { FormLabel } from '@chakra-ui/form-control'
import { useState } from 'react'

export default function Profile() {

    const profilePicRef = useRef(null);
    const [userInfo, setUserInfo] = useState({
        picture: defAdmin,
        username: 'Admin',
    });

    return (
        <BaseDashboard>
            <Stack
                direction={'row'}
                justifyContent={'space-between'}
                gap={12}
                pt={6}
            >
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    flex={1}
                >
                    <Image
                        src={userInfo?.picture}
                        borderRadius={'100%'}
                        overflow={'hidden'}
                        w={'180px'}
                        h={'180px'}
                        marginX={'auto'}
                    />
                    <Input type='file' name='profilePic' ref={profilePicRef} visibility={'hidden'} />
                    <Button
                        onClick={() => profilePicRef.current.click()}
                        bgColor={'primaryYellow.100'}
                    >Change</Button>
                </Box>
                <Box
                    flex={2}
                    color={'#fff'}
                    px={'10%'}
                >
                    <Box mb={'20px'}>
                        <FormLabel>Username:</FormLabel>
                        <Input type='text' value={userInfo?.username} onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })} />
                    </Box>
                    <Box mb={'20px'}>
                        <FormLabel>Old password:</FormLabel>
                        <Input type='text' placeholder='********' />
                    </Box>
                    <Box mb={'20px'}>
                        <FormLabel>New password:</FormLabel>
                        <Input type='text' placeholder='********' />
                    </Box>
                    <Box mb={'20px'}>
                        <FormLabel>Confirm new password:</FormLabel>
                        <Input type='text' placeholder='********' />
                    </Box>
                    <Button
                        w={'full'}
                        color={'#000'}
                        bgColor={'primaryYellow.100'}
                    >Save</Button>
                </Box>
            </Stack>
        </BaseDashboard>
    )
}
