import React, { ReactElement, useEffect, useState } from 'react'
import { Box } from '@mui/material'
import './top-bar-component.scss'
import { Country } from '../../generated/market-intelligence-api/dtos'
import { findAllCountriesUsingGET } from '../../generated/market-intelligence-api/hook'

export const TopBarComponent: React.FC = (): ReactElement => {
  const [countries, setCountries] = useState<Country[]>([])
  const [error, setError] = useState<string>('')

  useEffect(() => {
    findAllCountriesUsingGET()
      .then(countries => setCountries(countries.data))
      .catch(() => setError('Backend Call Error'))
  }, [])

  return (
    <Box className="top-bar-component">
      {
        countries.map(c =>
          <Box key={c.id}> {c.name}</Box>
        )
      }
      {
        (error !== '') &&
        <Box>{error}</Box>
      }
      Top Bar Component
    </Box>
  )
}
