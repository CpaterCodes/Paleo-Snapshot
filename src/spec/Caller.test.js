import * as Entelodon from './entelodon.json';
import Caller from '../components/Caller';
import { render, screen } from '@testing-library/react';

test('Takes and presents data', () => {
  const dataSet = Caller.dataSet('Entelodon', Entelodon.records[0]);
  render(dataSet.range);
  const tei = screen.getByText(/Eocene/);
  const navigation = screen.getByText(/ground dwelling/);
  expect(tei).toBeInTheDocument();
  expect(navigation).toBeInTheDocument();
});

test('Does so for other categories', () => {
  const dataSet = Caller.dataSet('Entelodon', Entelodon.records[0]);
  render(dataSet.taxonomy);
  const mammalia = screen.getByText(/Mammalia/);
  expect(mammalia).toBeInTheDocument();
  const artiodactyla = screen.getByText(/Artiodactyla/);
  expect(artiodactyla).toBeInTheDocument();
})
