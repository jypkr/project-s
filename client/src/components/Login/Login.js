import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from '../../utils/mutations.js'
import AuthService from '../../utils/auth.js'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

const Login = ({setParentState}) => {

  const [authState, setAuthState] = useState({
    email: '',
    password: '',
  })


  const [login] = useMutation(LOGIN_USER)

  const handleInputChange = ({ target: { name, value } }) => setAuthState({ ...authState, [name]: value })



  const handleLoginUser = async event => {
    // Need more function for validation
    if (authState.lEmail === "" || authState.lPassword === "") {
      event.preventDefault()
      alert("enter email or pwd")
    }
    else {
      event.preventDefault()
      const { data: { login: { token, user } } } = await login({
        variables: {
          email: authState.email,
          password: authState.password
        }
      })

      AuthService.login(token, user)
    }
  }


  return (
    <>
      <Container
        maxWidth="sm"
        height= '800px'
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
              Login
            </Typography>
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
              onClick={handleLoginUser}
              
            >
              Login
            </Button>
            <Button
              variant="contained"
              size="small"
               
              onClick={()=>setParentState()}
            >
              Register
            </Button>
          </div>
          </Stack>
        </Paper>


      </Container>

    </>
  )
}
export default Login