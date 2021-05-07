import { render, screen } from '@testing-library/react';
import Sheet from '../components/Sheet';

test('Can take and host content', () => {
  const sample = (<p> I am a paragraph, hear me roar!</p>);
  render(<Sheet content={sample}/>);
  const result = screen.getByText(/I am a paragraph/i);
  expect(result).toBeInTheDocument();
});

const hasButtonCalled = (buttonName) => {
  let button = screen.getByRole('button', {name: buttonName});
  expect(button).toBeInTheDocument();
}

test('Has Buttons', () => {
  render(<Sheet />);
  hasButtonCalled(/Range/i);
  hasButtonCalled(/Ecology/i);
  hasButtonCalled(/Taxonomy/i);
});

//test('Buttons can alter content', () => {});
