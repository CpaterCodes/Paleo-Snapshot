import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders title', () => {
  render(<App />);
  const titleString = screen.getByText(/Paleo Snapshot/i);
  expect(titleString).toBeInTheDocument();
});
