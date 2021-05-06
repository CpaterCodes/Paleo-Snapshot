import { render, screen } from '@testing-library/react';
import Sheet from '../components/Sheet';

test('Can take and host content', () => {
  const sample = (<p> I am a paragraph, hear me roar!</p>);
  render(<Sheet content={sample}/>);
  const result = screen.getByText(/I am a paragraph/i);
  expect(result).toBeInTheDocument();
});

test('Has Buttons', () => {
  render(<Sheet content='skrak'/>);
  const buttonA = screen.getByRole('button', {name:/Range/i});
  const buttonB = screen.getByRole('button', {name:/Ecology/i});
  const buttonC = screen.getByRole('button', {name:/Taxonomy/i});

  expect(buttonA).toBeInTheDocument();
  expect(buttonB).toBeInTheDocument();
  expect(buttonC).toBeInTheDocument();
});
