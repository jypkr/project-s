
import PostForm from '../../components/PostFrom'
import Navbar from '../../components/NavBar/Navbar'
import Box from '@mui/material/Box';
const Home = () => {
 


  
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

              <h1>The Home Page</h1>
              <PostForm></PostForm>
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

export default Home