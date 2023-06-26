import React from 'react'
import BaseDashboard from '../components/BaseDashboard/BaseDashboard'
import MenuRow from '../components/menu/MenuRow';
import { Button, FormControl, FormHelperText, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Switch, Text, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import Image1 from '../assets/images/1.jpg'
import Image2 from '../assets/images/2.jpg'
import Image3 from '../assets/images/3.png'
import Image4 from '../assets/images/4.png'
import Image5 from '../assets/images/5.jpg'
import Image6 from '../assets/images/6.jpg'
import Image7 from '../assets/images/7.jpg'
import Image8 from '../assets/images/8.jpg'

export default function Menu() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [menuList, setMenuList] = useState([
        {
            id: 1,
            title: 'Krunch Burger',
            description: 'Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun',
            price: 520,
            image: Image1,
            isDisabled: false
        },
        {
            id: 2,
            title: 'Rice N Spice',
            description: 'Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun',
            price: 330,
            image: Image2,
            isDisabled: false
        },
        {
            id: 3,
            title: 'Zingeratha',
            description: 'Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun',
            price: 330,
            image: Image3,
            isDisabled: true
        },
        {
            id: 4,
            title: 'Krunch Burger + Drink',
            description: 'Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun',
            price: 330,
            image: Image4,
            isDisabled: false
        },
        {
            id: 5,
            title: 'Krunch With Fries N Drink',
            description: 'Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun',
            price: 490,
            image: Image5,
            isDisabled: false
        },
        {
            id: 6,
            title: 'Chicken N Chips',
            description: 'Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun',
            price: 520,
            image: Image6,
            isDisabled: true
        },
        {
            id: 7,
            title: 'Krunch Chicken Burger',
            description: 'Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun',
            price: 520,
            image: Image7,
            isDisabled: false
        },
        {
            id: 8,
            title: '3 Pieces of Chicken',
            description: 'Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun',
            price: 890,
            image: Image8,
            isDisabled: false
        }
    ]);

    return (
        <BaseDashboard>
            <Stack
                direction={'row'}
                justifyContent={'center'}
            >
                <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    w={'86%'}
                >
                    <Input placeholder='Search...' _placeholder={{ color: '#fff' }} py={5} fontSize={14} _focusVisible={{ borderColor: '#fff' }} color={'primaryYellow.100'} w={'350px'} />
                    <Button onClick={onOpen} border={'1px solid'} borderColor={'primaryYellow.100'} bgColor={'primaryYellow.100'} color={'primaryBlack.100'} _active={{ bgColor: 'transparent' }} _hover={{ bgColor: 'transparent', color: 'primaryYellow.100' }}>Add Item</Button>
                </Stack>
            </Stack>
            <Modal isOpen={isOpen} onClose={onClose} size={'2xl'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Menu Item</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Display Image:</FormLabel>
                            <Input type='text' placeholder='Display Image' value={''} />
                            <FormLabel pt={4}>Title:</FormLabel>
                            <Input type='text' placeholder='Title' value={''} />
                            <FormLabel pt={4}>Description:</FormLabel>
                            <Input type='number' placeholder='Description' value={''} />
                            <FormLabel pt={4}>Price:</FormLabel>
                            <Input type='number' placeholder='Price' value={''} />
                            <Stack direction={'row'} alignItems={'center'} gap={2}>
                                <FormHelperText pb={1.5}>Currently Disabled.</FormHelperText>
                                <Switch colorScheme='yellow' size='md' />
                            </Stack>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button _hover={{ bgColor: 'green.600' }} bgColor={'green.600'} colorScheme='blue' mr={3}>
                            Add
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Stack
                py={4}
                direction={'row'}
                flexWrap={'wrap'}
                spacing={0}
                gap={4}
                justifyContent={'center'}
            >
                {
                    menuList.length &&
                    menuList?.map((v, i) => <MenuRow {...v} key={i} />)
                }
            </Stack>
        </BaseDashboard>
    )
}
