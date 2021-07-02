import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('renders title', () => {
  render(<App />);
  const titleString = screen.getByText(/Paleo Snapshot/i);
  expect(titleString).toBeInTheDocument();
});

test('Can retrieve an extinct animal for taxonomy info', async () => {
  render(<App />);
  const searchInput = screen.getByRole('textbox');
  userEvent.type(searchInput, "Entelodon");
  userEvent.click(screen.getByRole('button', {name: "=>"}));
  userEvent.click(screen.getByRole('button', {name: 'Taxonomy'}));
  const chordata = await screen.findByText(/Phylum: Chordata/i);
  expect(chordata).toBeInTheDocument();
});

test('Will display a thumbnail of the animal', async () => {
  render(<App />);
  const searchInput = screen.getByRole('textbox');
  userEvent.type(searchInput, "Eretmorhipis");
  userEvent.click(screen.getByRole('button', {name: "=>"}));
  const eretmorhipis = await screen.findByRole('img');
  expect(eretmorhipis).toHaveAttribute('src',
  'https://paleobiodb.org/data1.2/taxa/thumb.png?name=Eretmorhipis');
});
