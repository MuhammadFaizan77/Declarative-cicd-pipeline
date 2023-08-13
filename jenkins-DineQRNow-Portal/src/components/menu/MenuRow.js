import { Box, Button, FormControl, FormLabel, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';

export default function MenuRow({ id, title, description, price, image, isDisabled }) {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [singleData, setSingleData] = useState({
        id,
        title,
        description,
        price,
        image,
        isDisabled
    });

    return (
        <Stack position={'relative'} _hover={{ borderColor: 'primaryYellow.100' }} border={'2px solid transparent'} transition={'0.3s ease all'} color={'#fff'} w={'20%'} backgroundColor={'#1a1a1a'} pb={4} borderRadius={'12px'} overflow={'hidden'}>
            {
                singleData.isDisabled &&
                <Text
                    fontSize={'20px'}
                    // position={'absolute'}
                    bgColor={'primaryYellow.100'}
                    px={4}
                    color={'#1a1a1a'}
                    fontWeight={'bold'}
                    w={'full'}
                    textAlign={'center'}
                >
                    Disabled
                </Text>
            }
            <Box opacity={singleData?.isDisabled ? '0.4' : '1'}>
                <Image src={image} alt="order img" w={'100%'} />
            </Box>
            <Box
                px={4}
                display={'flex'}
                flexDir={'column'}
                justifyContent={'space-between'}
                alignItems={'center'}
                w={'full'}
                h={'full'}
            >
                <Stack>
                    <Text textOverflow={'ellipsis'} overflow={'hidden'} whiteSpace={'nowrap'} opacity={singleData?.isDisabled ? '0.4' : '1'} fontWeight={'bold'} pb={2} fontSize={22}>{singleData?.title ?? title}</Text>
                    <Text opacity={singleData?.isDisabled ? '0.4' : '1'} pb={4} fontSize={14}>{singleData?.description ?? description}</Text>
                </Stack>
                <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    w={'full'}
                >
                    <Text opacity={singleData?.isDisabled ? '0.4' : '1'} px={4} color={'primaryYellow.100'} borderRadius={'4px'} fontWeight={'semibold'} border={'2px solid'} borderColor={'primaryYellow.100'}>Rs: {singleData?.price ?? price}</Text>
                    <Button onClick={onOpen} _hover={{ backgroundColor: 'transparent', borderColor: 'primaryYellow.100', color: 'primaryYellow.100' }} border={'2px solid transparent'} p={0} bgColor={'primaryYellow.100'} color={'#1a1a1a'} fontWeight={'bold'} h={'26px'} w={'80px'} borderRadius={4}>Edit</Button>
                </Stack>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose} size={'2xl'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Order: <Text as={'span'} fontStyle={'italic'}>{title}</Text></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Order Title:</FormLabel>
                            <Input type='text' placeholder='Order Title' value={singleData?.title} onChange={(e) => setSingleData({ ...singleData, title: e.target.value })} />
                            <FormLabel pt={4}>Order Description:</FormLabel>
                            <Input type='text' placeholder='Order Title' value={singleData?.description} onChange={(e) => setSingleData({ ...singleData, description: e.target.value })} />
                            <FormLabel pt={4}>Order Price:</FormLabel>
                            <Input type='number' placeholder='Order Title' value={singleData?.price} onChange={(e) => setSingleData({ ...singleData, price: Number(e.target.value) })} />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Stack
                            direction={'row'}
                            alignItems={'center'}
                            justifyContent={'space-between'}
                            w={'full'}
                        >
                            {
                                singleData?.isDisabled ?
                                    <Button onClick={() => setSingleData({ ...singleData, isDisabled: false })} _hover={{ bgColor: 'green.600' }} bgColor={'green.600'} colorScheme='blue' mr={3}>
                                        Enable Order
                                    </Button>
                                    :
                                    <Button onClick={() => setSingleData({ ...singleData, isDisabled: true })} _hover={{ bgColor: 'red.600' }} bgColor={'red.600'} colorScheme='blue' mr={3}>
                                        Disable Order
                                    </Button>
                            }
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Update
                            </Button>
                        </Stack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Stack>
    )
}
