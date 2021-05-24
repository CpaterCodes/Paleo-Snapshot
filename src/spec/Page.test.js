import { render, screen } from '@testing-library/react';
import Page from '../components/Page.js';
import Entelodon from './entelodon.json';

test('Renders content depending on page chosen', () => {
  render(<Page data={Entelodon.records[0]} page='Range' />);
  const tei = screen.getByText(/Eocene/i);
  expect(tei).toBeInTheDocument();
  render(<Page data={Entelodon.records[0]} page='Taxonomy' />);
  const fml = screen.getByText(/Entelodontidae/i);
  expect(fml).toBeInTheDocument();
});
