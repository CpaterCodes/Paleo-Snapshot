import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from '../components/Search';

test("Has a search bar with dynamic content", () => {
  render(<Search />);
  textInput = screen.getByRole('input',{ name:'enterTaxon' });
  userEvent.type(textInput, 'Dunkleosteus');
  expect(textInput).toHaveValue('Dunkleosteus');

});
