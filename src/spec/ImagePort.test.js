import { render, screen } from '@testing-library/react';
import ImagePort from '../ImagePort/ImagePort';

test('Can take and render an image', () => {
  const imgInput = "../../public/Pangea.jpeg"
  render (<ImagePort img={imgInput}/>);
  const image = screen.getByRole('img');
  expect(image).toHaveAttribute('src', imgInput);
});

test('Has a default when there is no image response', () => {
  render(<ImagePort />);
  const nothing = screen.getByRole('img');
  expect(nothing).toHaveAttribute('src','null_result.png');
});
