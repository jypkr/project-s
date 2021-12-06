import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { REGISTER_USER } from '../../utils/mutations.js'
import AuthService from '../../utils/auth.js'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

const Register = ({setParentState}) =>{

  const [authState, setAuthState] = useState({
    name: '',
    email: '',
    password: ''
   
  })

  const [register] = useMutation(REGISTER_USER)
 

  const handleInputChange = ({ target: { name, value } }) => setAuthState({ ...authState, [name]: value })

  const handleRegisterUser = async event => {
    event.preventDefault()
    const { data: { register: { token, user } } } = await register({
      variables: {
        name: authState.name,
        email: authState.email,
        password: authState.password
      }
    })
    AuthService.login(token, user)
  }

  


  return (
    <>

      <Container
        maxWidth="sm"
        height='800px'
      >
        <Paper elevation={3} >
          <Stack
            component="form"
            spacing={2}
            noValidate
            autoComplete="off"
            direction="column"
            justifyContent="center"
            alignItems="center"
            padding='1rem'
          >
            <Typography variant="h1" component="div" gutterBottom>
              Register
            </Typography>
            <TextField
              required
              id="outlined-required"
              label="Name"
              value={authState.name}
              name='name'
              onChange={handleInputChange}
              defaultValue=""
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
              value={authState.email}
              name='email'
              onChange={handleInputChange}
              defaultValue=""
            />
            <TextField
              required
              id="outlined-required"
              label="Password"
              value={authState.password}
              name='password'
              onChange={handleInputChange}
              defaultValue=""
            />
            <div>
              <Button
                variant="contained"
                size="small"
                onClick={handleRegisterUser}

              >
                Register
              </Button>
              <Button
                variant="contained"
                size="small"

                onClick={() => setParentState()}
              >
                Login
              </Button>
            </div>
          </Stack>
        </Paper>


      </Container>
     
    </>
  )
}

export default Register