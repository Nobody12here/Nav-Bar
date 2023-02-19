import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {ChakraProvider} from '@chakra-ui/react'
import {extendTheme} from '@chakra-ui/react'

const Theme = extendTheme({
  styles:{
    global:{
      body:{
        bg:'#2F4F4F'
      }
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
