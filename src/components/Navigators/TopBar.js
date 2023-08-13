import { Stack } from '@chakra-ui/layout'
import { useSelector } from 'react-redux'
import UserDetails from './UserDetails.js'

export default function TopBar() {

  const user = useSelector(state => state?.value);

  return (
    <Stack
      py={2}
      borderBottom={'1px solid gray'}
    >
      <Stack
        direction={{base: 'column-reverse', 'xl': 'row'}}
        alignItems={{base: 'flex-end', 'xl': 'center'}}
        justifyContent={'flex-end'}
      >
        <UserDetails />
      </Stack>
    </Stack>
  )
}
