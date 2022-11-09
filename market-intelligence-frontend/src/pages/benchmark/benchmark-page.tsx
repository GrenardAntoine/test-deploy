import React, { ReactElement } from 'react'
import { Box } from '@mui/material'
import './benchmark-page.scss'
import { TopBarComponent } from '../../components/app-top-bar/top-bar-component'

export const BenchmarkPage: React.FC = (): ReactElement => {
  return (
        <Box className="benchmark-page">
            <TopBarComponent/>
            Benchmark Page
        </Box>
  )
}
