import { Stack } from '@chakra-ui/layout'
import React from 'react'
import Sidebar from '../Navigators/SideBar.js'
import TopBar from '../Navigators/TopBar.js'

export default function BaseDashboard({ children }) {
    return (
        <Stack direction={'row'} overflow={{ base: 'hidden', md: 'initial' }}>
            <Stack>
                <Sidebar />
            </Stack>
            <Stack w={'full'} pr={{ base: 0, lg: 5, '2xl': 10 }} bgColor={'#242424'} pl={{ base: 0, lg: 12, '2xl': 24 }} marginInlineStart={"0 !important"}>
                <TopBar />
                {children}
            </Stack>
        </Stack>
    )
}
