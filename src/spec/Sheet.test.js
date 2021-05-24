import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Sheet from '../components/Sheet';
import Entelodon from './entelodon.json';

const hasButtonCalled = (buttonName) => {
  let button = screen.getByRole('button', {name: buttonName});
  expect(button).toBeInTheDocument();
}

test('Has Buttons', () => {
  render(<Sheet dataSet={Entelodon.records[0]}/>);
  hasButtonCalled(/Range/i);
  hasButtonCalled(/Ecology/i);
  hasButtonCalled(/Taxonomy/i);
});

test('Buttons can alter content', () => {
  render(<Sheet dataSet={Entelodon.records[0]}/>);
  let jlh = screen.getByText(/ground dwelling/i);
  expect(jlh).toBeInTheDocument();
  userEvent.click(screen.getByText(/Ecology/i));
  let jdt = screen.getByText(/omnivore/i);
  expect(jdt).toBeInTheDocument();
});
