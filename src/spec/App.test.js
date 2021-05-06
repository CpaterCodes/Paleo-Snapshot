import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders hello world', () => {
  render(<App />);
  const titleString = screen.getByText(/Paleo Snapshot/i);
  expect(titleString).toBeInTheDocument();
});
