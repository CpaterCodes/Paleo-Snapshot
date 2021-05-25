import Entelodon from './entelodon.json';
import Caller from '../components/Caller';
import { render, screen } from '@testing-library/react';

test('Functions as an API call', () => {
  let records = Caller.getData('Entelodon');
  expect(records).toBeInstanceOf(Promise);
});
