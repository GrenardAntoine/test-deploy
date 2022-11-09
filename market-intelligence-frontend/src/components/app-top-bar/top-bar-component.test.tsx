import { render, screen } from '@testing-library/react'
import React from 'react'
import { TopBarComponent } from './top-bar-component'

describe('Test Top Bar Component', () => {
  it('The component should appear and show some basic stuffs', () => {
    render(<TopBarComponent />)
    expect(screen.getByText(/Top Bar Component/i)).toBeInTheDocument()
  })
})
