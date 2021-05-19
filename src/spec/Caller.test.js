import * as Entelodon from './entelodon.json';
import Caller from '../components/Caller';
import { render, screen } from '@testing-library/react';

test('Takes and presents data', () => {
  const dataSet = Caller.dataSet('Entelodon', Entelodon.records[0]);
  render(dataSet.range);
  const tli = screen.getByText(/Eocene/);
  const navigation = screen.getByText(/ground dwelling/);
  expect(tli).toBeInTheDocument();
  expect(navigation).toBeInTheDocument();
});
