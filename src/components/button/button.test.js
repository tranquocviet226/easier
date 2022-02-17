import { render, screen, fireEvent } from '@testing-library/react'
import Button from './index.js'

test('should show button', () => {
  render(<Button />)
  const button = screen.getByRole('button')
  expect(button).toBeVisible
})

test('should match text content', () => {
  render(<Button>Testing Button</Button>)
  const button = screen.getByText('Testing Button')
  expect(button).toBeVisible
})

test('should change text content when clicked', () => {
  render(<Button />)
  const button = screen.getByRole('button')
  expect(button).toBeVisible
  expect(button).toContainHTML('')
  fireEvent.click(button)
  expect(button).toContainHTML('Clicked')
})
