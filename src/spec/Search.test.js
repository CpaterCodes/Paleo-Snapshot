import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from '../components/Search';

test("Has a search bar with dynamic content", () => {
  render(<Search/>);
  const textInput = screen.getByRole('textbox', {name: ""});
  userEvent.type(textInput, 'Dunkleosteus');
  expect(textInput).toHaveValue('Dunkleosteus');
});

test("Will run a function passed to it using value", () => {
  const submitAction = jest.fn();
  render(<Search onSubmit={submitAction}/>);
  const textInput = screen.getByRole('textbox', {name: ""});
  userEvent.type(textInput, 'Josephoartigasia');
  userEvent.click(screen.getByRole('button'));
  expect(submitAction).toHaveBeenCalledWith('Josephoartigasia');
});
