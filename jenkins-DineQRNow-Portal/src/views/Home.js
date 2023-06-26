import { Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import BaseDashboard from "../components/BaseDashboard/BaseDashboard.js";
import OrderCard from "../components/Orders/OrderCard.js";

export default function Home() {

  const [activeOrders, setActiveOrders] = useState([
    {
      _id: 1,
      tableNo: 1,
      customerName: 'Safeer Shaikh',
      orders: [
        {
          item: 'Zinger Burger',
          quantity: 3,
          cost: 600
        },
        {
          item: 'Zinger Roll',
          quantity: 3,
          cost: 450
        },
        {
          item: 'Cold Drink 500ml',
          quantity: 3,
          cost: 270
        },
      ],
      orderStatus: 'Idle',
      isPaid: false,
      tax: 0,
      total: 1320
    },
    {
      _id: 2,
      tableNo: 2,
      customerName: 'Muhammad Faizan',
      orders: [
        {
          item: 'Zinger Burger',
          quantity: 3,
          cost: 600
        },
        {
          item: 'Zinger Roll',
          quantity: 3,
          cost: 450
        },
        {
          item: 'Cold Drink 500ml',
          quantity: 3,
          cost: 270
        },
      ],
      orderStatus: 'Idle',
      isPaid: false,
      tax: 0,
      total: 1320
    },
    {
      _id: 3,
      tableNo: 3,
      customerName: 'Haji Muhammad',
      orders: [
        {
          item: 'Zinger Burger',
          quantity: 3,
          cost: 600
        },
        {
          item: 'Zinger Roll',
          quantity: 3,
          cost: 450
        },
        {
          item: 'Cold Drink 500ml',
          quantity: 3,
          cost: 270
        },
      ],
      orderStatus: 'Idle',
      isPaid: false,
      tax: 0,
      total: 1320
    },
    {
      _id: 4,
      tableNo: 4,
      customerName: 'Shahzaib Ahmed',
      orders: [
        {
          item: 'Zinger Burger',
          quantity: 3,
          cost: 600
        },
        {
          item: 'Zinger Roll',
          quantity: 3,
          cost: 450
        },
        {
          item: 'Cold Drink 500ml',
          quantity: 3,
          cost: 270
        },
      ],
      orderStatus: 'Idle',
      isPaid: false,
      tax: 0,
      total: 1320
    },
    {
      _id: 5,
      tableNo: 5,
      customerName: 'Hasan Nadeem',
      orders: [
        {
          item: 'Zinger Burger',
          quantity: 3,
          cost: 600
        },
        {
          item: 'Zinger Roll',
          quantity: 3,
          cost: 450
        },
        {
          item: 'Cold Drink 500ml',
          quantity: 3,
          cost: 270
        },
      ],
      orderStatus: 'Idle',
      isPaid: false,
      tax: 0,
      total: 1320
    },
    {
      _id: 6,
      tableNo: 6,
      customerName: 'Asif Ahmed',
      orders: [
        {
          item: 'Zinger Burger',
          quantity: 3,
          cost: 600
        },
        {
          item: 'Zinger Roll',
          quantity: 3,
          cost: 450
        },
        {
          item: 'Cold Drink 500ml',
          quantity: 3,
          cost: 270
        },
      ],
      orderStatus: 'Idle',
      isPaid: false,
      tax: 0,
      total: 1320
    },
  ]);

  return (
    <BaseDashboard>
      <Stack 
        pt={4}
        direction={'row'}
        flexWrap={'wrap'}
        spacing={0}
        gap={4}
      >
        {
          activeOrders?.length > 0 &&
          activeOrders?.map((v, i) => <OrderCard key={i} {...v} />)
        }
      </Stack>
    </BaseDashboard>
  );
}