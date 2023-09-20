import React from 'react'
import { Grid } from '@mui/material'
import Navigation from '../Navigation/Navigation'
import HomeSection from '../HomeSection/HomeSection'

const HomePage = () => {
  return (
    <Grid container className='px-5 lg:px-36'>
      <Grid item xs={4} md={2} className='text-center'>
        <Navigation/>
      </Grid>

      <Grid item xs={4} md={8} className='text-center'>
        <HomeSection/>
      </Grid>

      <Grid item xs={4} md={2} className='text-center'>
        <p>right part</p>
      </Grid>
    </Grid>
  )
}

export default HomePage