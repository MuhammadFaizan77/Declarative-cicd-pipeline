import { useState } from "react";
import BaseDashboard from "../components/BaseDashboard/BaseDashboard.js";
import BarChart from 'react-easy-bar-chart';
import { Stack } from "@chakra-ui/react";

export default function Analytics() {

    const [data] = useState([
        {
            title: "1 June, Thu",
            value: 86,
            color: "#196f3d",
        },
        {
            title: "2 June, Fri",
            value: 97,
            color: "#a93226",
        },
        {
            title: "3 June, Sat",
            value: 129,
            color: " #1f618d",
        },
        {
            title: "4 June, Sun",
            value: 162,
            color: "#839192",
        },
        {
            title: "5 June, Mon",
            value: 76,
            color: "#d35400",
        },
        {
            title: "6 June, Tue",
            value: 59,
            color: " #a9cce3",
        },
        {
            title: "7 June, Wed",
            value: 79,
            color: "#2e4053",
        },
        {
            title: "8 June, Thu",
            value: 69,
            color: "#186a3b",
        },
    ]);

    return (
        <BaseDashboard>
            <Stack
                color={"#fff"}
                w={'full'}
                direction={'row'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <BarChart
                    xAxis='Week Days'
                    yAxis="Customers"
                    height={400}
                    width={1200}
                    data={data}
                />
            </Stack>
        </BaseDashboard>
    );
}