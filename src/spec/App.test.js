import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('renders title', () => {
  render(<App />);
  const titleString = screen.getByText(/Paleo Snapshot/i);
  expect(titleString).toBeInTheDocument();
});

test('Can retrieve an extinct animal for taxonomy info', () => {
  render(<App />);
  const searchInput = screen.getByRole('textbox', {name: ""})
  userEvent.type(searchInput, "Entelodon");
  userEvent.click(screen.getByRole('button', {name: "=>"}));
  userEvent.click(screen.getByRole('button', {name: 'Taxonomy'}));
  const chordata = screen.getByText(/Phylum: Chordata/i);
  expect(chordata).toBeInTheDocument();
});
