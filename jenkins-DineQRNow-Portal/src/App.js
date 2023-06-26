import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react"
import AppRoute from './routes/Route';
import { loadUser } from './reducers/useReducers'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'

function App() {

  const theme = extendTheme({
    colors: {
      primaryBlack: {
        100: '#1a1a1a',
      },
      primaryYellow: {
        100: '#fab503',
      },
      primaryGray: {
        100: '#616161',
        200: '#d9d9d9'
      }
    },
  });


  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (localStorage.getItem('user') !== null || localStorage.getItem('user') !== undefined) {
        let user = JSON.parse(localStorage.getItem('user') ?? null)
        dispatch(loadUser(user))
      } else if (Cookies.get('user') !== undefined || Cookies.get('user') !== null) {
        let user = JSON.parse(Cookies.get('user') ?? null)
        dispatch(loadUser(user))
      }
    })()
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <AppRoute />
    </ChakraProvider>
  );
}

export default App;
