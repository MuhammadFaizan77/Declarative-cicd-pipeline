import { Stack, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, FormControl, FormLabel, Input } from "@chakra-ui/react";
import BaseDashboard from "../components/BaseDashboard/BaseDashboard.js";
import { useEffect, useState } from "react";

export default function Inventory() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const TheadStyle = {
    color: 'primaryYellow.100'
  }

  const [inventoryData] = useState([
    {
      id: 1,
      product: 'Buns',
      currentHolding: 840,
      usedByToday: 120
    },
    {
      id: 2,
      product: 'Chicken Legs',
      currentHolding: 1400,
      usedByToday: 620
    },
    {
      id: 3,
      product: 'Chicken Wings',
      currentHolding: 1250,
      usedByToday: 312
    },
    {
      id: 4,
      product: 'French Fries (potatoes)',
      currentHolding: 450,
      usedByToday: 92
    },
    {
      id: 5,
      product: 'Coca Cola',
      currentHolding: 3000,
      usedByToday: 940
    },
  ]);

  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    if (selectedData) onOpen();
  }, [selectedData])


  return (
    <BaseDashboard>
      <Stack
        pt={4}
      >
        <TableContainer>
          <Table
            size={'lg'}
            border={'1px solid #fff'}
            width={'full'}
          >
            <Thead>
              <Tr>
                <Th sx={TheadStyle}>Product</Th>
                <Th sx={TheadStyle}>Current holding</Th>
                <Th sx={TheadStyle}>Used by today</Th>
                <Th sx={TheadStyle}>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                inventoryData.length &&
                inventoryData?.map(val => {
                  return (
                    <Tr
                      key={val?.id ?? ''}
                      color={'#fff'}
                    >
                      <Td textTransform={'uppercase'}>{val?.product ?? 'Loading...'}</Td>
                      <Td>{val?.currentHolding ?? 'Loading...'}</Td>
                      <Td>{val?.usedByToday ?? 'Loading...'}</Td>
                      <Td>
                        <Button onClick={() => setSelectedData(val)} border={'2px solid'} borderColor={'primaryYellow.100'} bgColor={'transparent'} _hover={{ bgColor: 'transparent' }}>Update</Button>
                      </Td>
                    </Tr>
                  )
                })
              }
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Product Name:</FormLabel>
              <Input type='text' value={selectedData?.product ?? ''} onChange={(e) => setSelectedData({ ...selectedData, product: e.target.value })} />
              <FormLabel pt={4}>Current Holding:</FormLabel>
              <Input type='text' value={selectedData?.currentHolding ?? ''} onChange={(e) => setSelectedData({ ...selectedData, currentHolding: e.target.value })} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Confirm
            </Button>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </BaseDashboard>
  );
}