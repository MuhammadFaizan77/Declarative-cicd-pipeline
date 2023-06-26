import { Image } from '@chakra-ui/image'
import defAdmin from '../../assets/images/defAdmin.png'
import { Box, Heading, Stack, Text } from '@chakra-ui/layout'

export default function UserDetails() {
    return (
        <Stack
            direction={'row'}
            alignItems={{ base: 'flex-start', 'xl': 'center' }}
            gap={1}
        >
            <Box
                textAlign={'right'}
            >
                <Heading
                    fontWeight={400}
                    fontSize={20}
                    color={'#fff'}
                >Safeer Shaikh</Heading>
                <Text
                    color={'primaryYellow.100'}
                    fontSize={14}
                    position={'relative'}
                    _after={{
                        content: '""',
                        position: 'absolute',
                        top: '12px',
                        right: '50px',
                        width: '35%',
                        height: '1px',
                        bgColor: 'primaryYellow.100'
                    }}
                >Admin</Text>
            </Box>
            <Box>
                <Image
                    alt={'dice on admin picture'}
                    src={defAdmin ?? ''}
                    w={{ base: '50px', lg: '70px' }}
                    height={{ base: '60px', lg: '80px' }}
                    borderRadius={'100%'}
                    objectFit={'contain'}
                />
            </Box>
        </Stack>
    )
}
