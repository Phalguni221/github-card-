import { render, screen } from '@testing-library/react';
import GitHubCard from './GitHubCard';
import renderer from 'react-test-renderer'

test('renders a snapshot', () => {
  const plant = renderer.create(<GitHubCard/>).toJSON()
  expect(plant).toMatchSnapshot()
})