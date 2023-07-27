import {React, useState} from 'react'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import { FormControl, TextField} from '@mui/material'
import "../stylesheets/Login.css"

function Login() {
  const [data, setData] = useState({})

  const handleChange =(event, type)=>{
    setData((prevValues)=>{
      return {
        ...prevValues,
        [type]: event.target.value
      }
    })
  }
  console.log(data,'<<<<<<<<<<<<<<<<<<<<,woho')
  return (
    <div className='login-page-container'>
        <Box >
      <Card variant="outlined">
      <CardContent>
      <FormControl>
      <TextField
          onChange={e=>handleChange(e, 'email')}
          label="Email"
          variant="filled"
          className='login-email'
        />
          <TextField
          onChange={e=>handleChange(e, 'password')}
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          className='login-password'
        />
</FormControl>
      {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
       bls
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography> */}
    </CardContent>

    <CardActions>
      <Button size="small">Login</Button>
    </CardActions>
      </Card>
    </Box>
    </div>
  )
}

export default Login