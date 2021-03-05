import { render, screen } from '@testing-library/react'
import Navbar from './components/Navbar'

test('renders about link in nav', () => {
  render(<Navbar />)
  const linkElement = screen.getByText(/about/i)
  expect(linkElement).toBeInTheDocument()
})
