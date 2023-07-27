import { React, useState } from 'react'
import { Box, Card, CardActions, CardContent, Button, FormControl, TextField, Tab } from '@mui/material';
import "../stylesheets/Login.css"
import { TabContext, TabList, TabPanel } from '@mui/lab';

function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
    tab: "1"
  })

  const handleChange = (event, value, type) => {
    let valueToStore = event.target.value
    if (type === 'tab') {
      valueToStore = value
    }
    setData((prevValues) => {
      return {
        ...prevValues,
        [type]: valueToStore
      }
    })
  }

  return (
    <div className='login-page-container'>
      <Box >
        <Card variant="outlined">
          <CardContent>

            <TabContext value={data.tab}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={(e, value) => handleChange(e, value, 'tab')} aria-label="lab API tabs example">
                  <Tab label="Sign In" value="1" />
                  <Tab label="Sign Up" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <FormControl>
                  <TextField
                    onChange={e => handleChange(e, '', 'email')}
                    label="Email"
                    variant="filled"
                    className='login-email'
                  />
                  <TextField
                    onChange={e => handleChange(e, '', 'password')}
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                    className='login-password'
                  />
                </FormControl>
              </TabPanel>

              <TabPanel value="2">

              </TabPanel>
            </TabContext>

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
            <Button variant="contained">Login</Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  )
}

export default Login