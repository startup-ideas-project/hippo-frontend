import { Box } from '@mui/system'
import React from 'react'
import { BackgroundGradient } from './background-gradient'

export function HeroIllustration() {
  return(
    <div>
      <BackgroundGradient className="absolute inset-0 lg:hidden" />

      <Box
      component="img"
      sx={{
      height: 730
      }}
      alt="unleash access stock photo"
      src={'https://unleash-access-front-end-media.s3.amazonaws.com/pexels-rakicevic-nenad-1262302.jpg'}

      />
    </div>
  )
}