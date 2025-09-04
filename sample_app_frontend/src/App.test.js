import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login screen by default', () => {
  render(<App />);
  expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Sign In/i })).toBeInTheDocument();
});
