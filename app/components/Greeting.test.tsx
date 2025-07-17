import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Greeting } from './Greeting'


describe('Greeting component', () => {
  it('renders a greeting message', () => {
    render(<Greeting name="Kamil" />)
    expect(screen.getByText('Hello, Kamil!')).toBeInTheDocument()
  })
})
