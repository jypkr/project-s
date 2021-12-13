import Navbar from '../../components/NavBar/Navbar'
// import { useState, useEffect } from 'react'
// import { useQuery, useMutation } from '@apollo/client'
// import { useStoreContext } from '../../utils/GlobalState.js'
// import AuthService from '../../utils/auth.js'
import Box from '@mui/material/Box';
import { defaultDataIdFromObject } from '@apollo/client';






const Friends =() =>{




  return (

    <>
      <Box display="flex" flexDirection="row" >
        <Box flexGrow={0}>
          <Navbar></Navbar>
        </Box>
        <Box display="flex" flexDirection="row" flexGrow={6}>
          <Box
            display="flex"
            flexDirection="column"
            marginLeft='1rem'

            flexGrow={1}
          >
            <div className='pgContent'>
              <h1>Friends Page</h1>
            </div>

          </Box>
        </Box>
        <Box display="flex" flexDirection="row" flexGrow={1}>
          <Box
            display="flex"
            flexDirection="column"
            marginLeft='1rem'


            flexGrow={1}
          >
            <h1>Side Bar</h1>
          </Box>
        </Box>

      </Box>

    </>


  )
}

export default Friends