import {
    Box, Button, Heading, Stack, Text, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Icon,
} from '@chakra-ui/react'
import React from 'react'
import KfcBg from '../../assets/images/kfcBg.jpg'
import { AiOutlineCheck } from 'react-icons/ai'

export default function OrderCard({ _id, tableNo, customerName, orders, orderStatus, isPaid, tax, total }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen: isStatusOpen, onOpen: onStatusOpen, onClose: onStatusClose } = useDisclosure()
    return (
        <Stack
            w={'32%'}
            border={'2px solid'}
            borderColor={'primaryYellow.100'}
            color={'#fff'}
            // marginBottom={'10px !important'}
            bgImage={KfcBg}
            bgPosition={'bottom'}
            bgSize={'cover'}
            bgRepeat={'no-repeat'}
            p={2}
            borderRadius={8}
        >
            <Box textAlign={'center'}>
                <Heading fontSize={28} pb={2} mb={2} borderBottom={'2px solid #fff'}>Table# {tableNo}</Heading>
                <Text fontSize={20} textTransform={'capitalize'} width={'fit-content'} marginX={'auto'} borderBottom={'1px solid #fff'} mb={4}>{customerName}</Text>
            </Box>
            <Box>

            </Box>
            <Stack
                direction={'row'}
                justifyContent={'space-between'}
            >
                <Button bgColor={'primaryYellow.100'} onClick={onOpen}>Details</Button>
                <Button bgColor={'primaryYellow.100'} onClick={onStatusOpen}>Status: {orderStatus}</Button>
            </Stack>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Table# {tableNo}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box>
                            {
                                orders?.length > 0 &&
                                orders?.map((v, i) =>
                                    <Stack key={i} direction={'row'}>
                                        <Text>{v?.item}</Text>
                                        <Text>{v?.quantity}</Text>
                                        <Text>{v?.cost}</Text>
                                    </Stack>
                                )
                            }
                        </Box>
                        <Text>GST: {tax}</Text>
                        <Text>total: {total}</Text>
                        <Text>payable: {total}</Text>
                        <Text>isPaid: {isPaid ? "Paid" : 'Not Paid'}</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Modal isOpen={isStatusOpen} onClose={onStatusClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Current Status: {orderStatus}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                        <Stack gap={2}>
                            <Stack direction={'row'} alignItems={'center'}>
                                <Text>Change status to <b>Cooking</b></Text>
                                <Button bgColor={'green.300'} color={'#fff'}><Icon as={AiOutlineCheck} /></Button>
                            </Stack>
                            <Stack direction={'row'} alignItems={'center'}>
                                <Text>Change status to <b>Served</b></Text>
                                <Button bgColor={'green.300'} color={'#fff'}><Icon as={AiOutlineCheck} /></Button>
                            </Stack>
                        </Stack>

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onStatusClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Stack>
    )
}
