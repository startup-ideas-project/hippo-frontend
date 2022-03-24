import React from 'react'
import { Box } from '@mui/system'

export function Logo() {
  return (
    <Box
        component="img"
        sx={{
        height: 200,
        width: 200
        }}
        alt="Your logo."
        src={'https://unleash-access-front-end-media.s3.amazonaws.com/LogoSample_ByTailorBrands.jpg'}
    />
  )
}