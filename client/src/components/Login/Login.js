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
import Avatar from '@mui/material/Avatar';
import CssBaseLine from '@mui/material/CssBaseline'
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../Login/Login.css'

const Login = ({setParentState}) => {

  const [authState, setAuthState] = useState({
    email: '',
    password: '',
  })


  const [login] = useMutation(LOGIN_USER)

  const handleInputChange = ({ target: { name, value } }) => setAuthState({ ...authState, [name]: value })



  const handleLoginUser = async event => {
    // Need more function for validation
    if (authState.email === "" || authState.password === "") {
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
      {/* <Container
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


      </Container> */}

      <Grid 
        container 
        component="main"
        sx={{ height: '100vh' }}>
          <CssBaseLine />
            <Grid 
              className='logo'
              item
              xs={false}
              sm={4}
              md={7}
              sx={{ bgcolor: 'primary.main',}}
            >
            <h1 className='title'>
              Shitter
            </h1>
            <TwitterIcon 
            sx={{
              fontSize: 250,
              color: 'white',
            }}
            />
          </Grid>
            <Grid 
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
            >
              <Box sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'info.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography
              className='SignIn'
              component='h1'
              varient='h5'
              >
                Sign In
              </Typography>
              <Box 
              component='form'
              noValidate
              onSubmit={handleLoginUser}
              sx={{
                mt: 1
              }}
              >
              <TextField
                margin="normal"
                required
                fullWidth
                id="outlined-required"
                label="Email"
                value={authState.email}
                name='email'
                onChange={handleInputChange}
                defaultValue=""
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="outlined-required"
                label="Password"
                name='password'
                value={authState.password}
                onChange={handleInputChange}
                defaultValue=""
              />
              <Button
                className='loginBtn'
                type='submit'
                fullWidth
                varient='contained'
                sx={{
                  bgcolor: 'info.main',
                  color: 'white',
                  mt: 3,
                  mb: 2
                }}
              >
                Sign In
              </Button>
              <Grid item xs>
                <Link 
                  href='#'
                  variant='body2'
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                  }}
                  onClick={()=>setParentState()}
                >
                  Don't Have an Account? Sign Up
                </Link>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>

    </>
  )
}
export default Login