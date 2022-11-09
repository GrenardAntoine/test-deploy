import { render, screen } from '@testing-library/react'
import React from 'react'
import { BenchmarkPage } from './benchmark-page'

describe('Test Benchmark Page', () => {
  it('The page should appear and show some basic stuffs', () => {
    render(<BenchmarkPage />)
    expect(screen.getByText(/Benchmark Page/i)).toBeInTheDocument()
  })
})
