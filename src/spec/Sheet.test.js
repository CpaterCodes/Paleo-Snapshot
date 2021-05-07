import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Sheet from '../components/Sheet';

const dataSet = {
  range: "I lived for some time",
  ecology: "I ate some things",
  taxonomy: "I was something"
};

const hasButtonCalled = (buttonName) => {
  let button = screen.getByRole('button', {name: buttonName});
  expect(button).toBeInTheDocument();
}

test('Has Buttons', () => {
  render(<Sheet dataSet={dataSet}/>);
  hasButtonCalled(/Range/i);
  hasButtonCalled(/Ecology/i);
  hasButtonCalled(/Taxonomy/i);
});

test('Buttons can alter content', () => {
  render(<Sheet dataSet={dataSet}/>);
  let rangeData = screen.getByText(/I lived for some time/i);
  expect(rangeData).toBeInTheDocument();
  userEvent.click(screen.getByText(/Ecology/i));
  let ecologyData = screen.getByText(/I ate some things/i);
  expect(ecologyData).toBeInTheDocument();
});
